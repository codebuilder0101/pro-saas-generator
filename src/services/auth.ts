import { EmailOtpType, Provider, User } from '@supabase/supabase-js';
import { SupabaseClient } from '@supabase/supabase-js';

export default class AuthService {
    private supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    async getUserId(): Promise<string | null> {
        const data = await this.getUser();
        return data?.id || null;
    }

    async getUser(): Promise<User | null> {
        const { data } = await this.supabase.auth.getUser();
        return data?.user || null;
    }

    async signUp(email: string, password: string): Promise<User | null> {
        const { data, error } = await this.supabase.auth.signUp({ email, password });
        if (error) throw error;
        return data.user;
    }

    async signIn(email: string, password: string): Promise<User | null> {
        const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
        if (error) {
            this.resendEmail(email);
            throw error
        };
        return data.user;
    }

    async signInProvider(provider: Provider): Promise<boolean> {
        const { error } = await this.supabase.auth.signInWithOAuth({ provider, options: { redirectTo: `${process.env.NEXT_PUBLIC_PROJECT_URL}/confirm-signup?oauth=${provider}` } });
        if (error) throw error
        return true;
    }

    async signOut(): Promise<void> {
        const { error } = await this.supabase.auth.signOut();
        if (error) throw error;
    }

    async confirmEmail(token: string, type: EmailOtpType): Promise<User | null> {
        const { data, error } = await this.supabase.auth.verifyOtp({ token_hash: token, type });
        if (error) throw error;
        return data.user;
    }

    async forgotPassword(email: string): Promise<boolean> {
        const { error } = await this.supabase.auth.resetPasswordForEmail(email, { redirectTo: `${process.env.NEXT_PUBLIC_PROJECT_URL}/new-password` });
        if (error) throw error;
        return true;
    }

    async newPassword(password: string): Promise<boolean> {
        const { error } = await this.supabase.auth.updateUser({ password });
        if (error) throw error;
        return true;
    }

    async resendEmail(email: string): Promise<boolean> {
        const { error } = await this.supabase.auth.resend({
            email,
            type: 'signup'
        });
        if (error) throw error;
        return true;
    }

    async validateCode(code: string): Promise<boolean> {
        const { error } = await this.supabase.auth.getUser(
            code
        )
        if (error) throw error;
        return true;
    }
}
