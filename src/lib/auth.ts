import { User, VerifyEmailOtpParams } from '@supabase/supabase-js';

import { supabase } from './supabase';

export const getUSerSession = async (): Promise<User | null> => {
    const { data, error } = await (await supabase).auth.getSession();
    if (error) throw error;
    return data?.session?.user || null;
};

export const signUp = async (email: string, password: string): Promise<User | null> => {
    const { data, error } = await (await supabase).auth.signUp({ email, password, });
    if (error) throw error;
    return data.user;
};


export const signIn = async (email: string, password: string): Promise<User | null> => {
    const { data, error } = await (await supabase).auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.user;
};

export const signOut = async (): Promise<void> => {
    const { error } = await (await supabase).auth.signOut();
    if (error) throw error;
};

export const confirmEmail = async ({ token, type }: VerifyEmailOtpParams): Promise<User | null> => {
    const { data, error } = await (await supabase).auth.verifyOtp({ token_hash: token, type })
    if (error) throw error;
    return data.user;
};

export const forgotPassword = async (email: string): Promise<unknown> => {
    const { data, error } = await (await supabase).auth.resetPasswordForEmail(email);
    if (error) throw error;
    return data;
};

export const newPassword = async (password: string): Promise<boolean> => {
    const user = await (await supabase).auth.getUser();
    console.log(user);


    const { error } = await (await supabase).auth.updateUser({
        password,
    });
    if (error) throw error;
    return true;
};
