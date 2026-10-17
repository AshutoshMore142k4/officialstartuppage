import { useState } from 'react';
import { X } from 'lucide-react';

const FOUNDER_EMAIL = 'founder.ashutoshm@11startups.tech';

// Kept in module scope, not storage: it survives SPA route changes (each page mounts its own header)
// without writing anything to the browser, which the Privacy Policy says is limited to the theme choice.
let dismissed = false;

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(!dismissed);
  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative flex min-h-10 items-center justify-center bg-[#c0d43a] px-12 py-2 text-center text-sm text-[#111]"
    >
      <a
        href={`mailto:${FOUNDER_EMAIL}?subject=Pre-seed%20round`}
        className="underline-offset-4 hover:underline focus-visible:underline"
      >
        We&apos;re raising our pre-seed round. Talk to the founder <span aria-hidden="true">→</span>
      </a>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => {
          dismissed = true;
          setVisible(false);
        }}
        className="absolute right-2 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#111] sm:right-4"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
