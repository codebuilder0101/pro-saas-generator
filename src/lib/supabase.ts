import { createClient, SupabaseClient } from '@supabase/supabase-js';

type Supabase = SupabaseClient;

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase: Supabase = createClient(supabaseUrl, supabaseAnonKey);
