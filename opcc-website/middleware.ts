import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/navigation';

// Handle root redirect to default locale
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/zh', request.url));
  }
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ['/', '/(zh|en)/:path*']
};
