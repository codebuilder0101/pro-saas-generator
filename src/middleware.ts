import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { updateSession } from './libs/supabase/middleware';
import { createClient } from './libs/supabase/server';
import SupabaseService from './services/supabaseService';

export async function middleware(request: NextRequest) {
  await updateSession(request);
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/dashboard')) {
    const supabase = await createClient();
    const SupabaseServiceInstance = new SupabaseService(supabase);

    const userId = await SupabaseServiceInstance.getUserId();

    if (!userId) {
      const redirectUrl = new URL('/signin', request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};