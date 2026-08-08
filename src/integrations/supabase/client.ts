import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

/** False when the deploy is missing its Supabase env vars — contact forms will fail, but the site still renders. */
export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);

if (!isSupabaseConfigured) {
  console.error(
    'Supabase environment variables are missing. Contact forms are disabled. ' +
      'Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in your hosting provider.',
  );
}

// createClient() throws "supabaseUrl is required." on an empty URL. Because this module is
// imported at the top level of CTASection (which ships in the main bundle), that throw would
// take down the entire app with a blank page rather than just breaking the form. The fallbacks
// keep the module import safe; requests then fail normally and the form shows its error state.
export const supabase = createClient<Database>(
  SUPABASE_URL || 'https://unconfigured.supabase.co',
  SUPABASE_PUBLISHABLE_KEY || 'unconfigured',
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    },
  },
);
