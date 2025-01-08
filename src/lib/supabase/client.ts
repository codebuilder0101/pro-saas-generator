import { createBrowserClient } from '@supabase/ssr'


const supabaseUrl: string = process.env.SUPABASE_URL!;
const supabaseAnonKey: string = process.env.SUPABASE_ANON_KEY!;

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})