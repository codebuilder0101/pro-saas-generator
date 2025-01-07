import { User, VerifyEmailOtpParams } from '@supabase/supabase-js';

import { supabase } from './supabase';

export const signUp = async (email: string, password: string): Promise<User | null> => {
    const { data, error } = await supabase.auth.signUp({ email, password, });
    if (error) throw error;
    return data.user;
};


export const signIn = async (email: string, password: string): Promise<User | null> => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.user;
};

export const signOut = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
};

export const confirmEmail = async ({ token, type }: VerifyEmailOtpParams): Promise<User | null> => {
    const { data, error } = await supabase.auth.verifyOtp({ token_hash: token, type })
    if (error) throw error;
    return data.user;
};
