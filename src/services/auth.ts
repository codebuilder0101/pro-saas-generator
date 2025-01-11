import { EmailOtpType, Provider, User, SupabaseClient, AuthError } from '@supabase/supabase-js';

export default class AuthService {
  private supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  private handleError(error: AuthError | Error): never {
    console.error('AuthService Error:', error.message);
    throw new Error(error.message || 'Ocorreu um erro inesperado.');
  }

  async getUserId(): Promise<string | null> {
    try {
      const user = await this.getUser();
      return user?.id || null;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async getUser(): Promise<User | null> {
    try {
      const { data, error } = await this.supabase.auth.getUser();
      if (error) this.handleError(error as AuthError | Error);
      return data?.user || null;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async signUp(email: string, password: string): Promise<User | null> {
    try {
      const { data, error } = await this.supabase.auth.signUp({ email, password });
      if (error) this.handleError(error as AuthError | Error);
      return data.user;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async signIn(email: string, password: string): Promise<User | null> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
      if (error) {
        await this.resendEmail(email);
        this.handleError(error as AuthError | Error);
      }
      return data.user;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async signInProvider(provider: Provider): Promise<boolean> {
    try {
      const { error } = await this.supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: `${process.env.NEXT_PUBLIC_PROJECT_URL}/confirm-signup?oauth=${provider}` },
      });
      if (error) this.handleError(error as AuthError | Error);
      return true;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async signOut(): Promise<void> {
    try {
      const { error } = await this.supabase.auth.signOut();
      if (error) this.handleError(error as AuthError | Error);
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async confirmEmail(token: string, type: EmailOtpType): Promise<User | null> {
    try {
      const { data, error } = await this.supabase.auth.verifyOtp({ token_hash: token, type });
      if (error) this.handleError(error as AuthError | Error);
      return data.user;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async forgotPassword(email: string): Promise<boolean> {
    try {
      const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_PROJECT_URL}/new-password`,
      });
      if (error) this.handleError(error as AuthError | Error);
      return true;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async newPassword(password: string): Promise<boolean> {
    try {
      const { error } = await this.supabase.auth.updateUser({ password });
      if (error) this.handleError(error as AuthError | Error);
      return true;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async resendEmail(email: string): Promise<boolean> {
    try {
      const { error } = await this.supabase.auth.resend({
        email,
        type: 'signup',
      });
      if (error) this.handleError(error as AuthError | Error);
      return true;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }

  async validateCode(code: string): Promise<boolean> {
    try {
      const { error } = await this.supabase.auth.getUser(code);
      if (error) this.handleError(error as AuthError | Error);
      return true;
    } catch (error) {
      this.handleError(error as AuthError | Error);
    }
  }
}
