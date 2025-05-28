import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // Make sure this exports a valid config

// Create the actual middleware
const intlMiddleware = createMiddleware(routing);

// Export with try/catch for better debugging
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  try {
    return intlMiddleware(request);
  } catch (error) {
    console.error('[middleware] Error in next-intl middleware:', error);
    return new Response('Internal middleware error', { status: 500 });
  }
}

// Middleware matcher configuration
export const config = {
  // This matcher excludes:
  // - /api, /trpc, /_next, /_vercel
  // - files like favicon.ico or anything with a dot
  matcher: [
    '/((?!api|trpc|_next|_vercel|favicon.ico|.*\\..*).*)',
  ]
};


// import createMiddleware from 'next-intl/middleware';
// import {routing} from './i18n/routing';
 
// export default createMiddleware(routing);
 
// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   // matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
//   matcher: ['/((?!api|trpc|_next|_vercel|favicon.ico|.*\\..*).*)']

// };