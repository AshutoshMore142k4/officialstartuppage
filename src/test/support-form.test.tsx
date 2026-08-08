import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/components/theme-provider';
import Support from '@/pages/Support';

const insertMock = vi.fn(() => Promise.resolve({ error: null }));
vi.mock('@/integrations/supabase/client', () => ({
  supabase: { from: () => ({ insert: insertMock }) },
}));

describe('Support form', () => {
  it('calls the Supabase insert on submit instead of silently discarding the message', async () => {
    render(
      <HelmetProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <MemoryRouter>
            <Support />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>,
    );

    fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByPlaceholderText('you@example.com'), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Describe your issue or question...'), {
      target: { value: 'Test message' },
    });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(insertMock).toHaveBeenCalledTimes(1));
    expect(insertMock).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Jane', email: 'jane@example.com', message: 'Test message' }),
    );
    await screen.findByText('Message Sent!');
  });
});
