import { createClient } from '@supabase/supabase-js';

console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Supabase Anon Key:', import.meta.env.VITE_SUPABASE_ANON_KEY);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wwbzcktileifymrgvdos.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3Ynpja3RpbGVpZnltcmd2ZG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NTY5MzgsImV4cCI6MjA0ODMzMjkzOH0.QQLOTF0Q0pdb1k36Voargou9CqX0smbEgedOrxWvtbw';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env file and ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set correctly.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
