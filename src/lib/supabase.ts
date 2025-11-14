import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helpers
export const auth = {
  signUp: async (email: string, password: string) => {
    return await supabase.auth.signUp({ email, password });
  },
  
  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password });
  },
  
  signInWithGoogle: async () => {
    return await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  },
  
  signOut: async () => {
    return await supabase.auth.signOut();
  },
  
  getUser: async () => {
    return await supabase.auth.getUser();
  },
};
