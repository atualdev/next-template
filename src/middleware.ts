import { auth as middleware } from '@/auth';

export default middleware((req) => {
  if (!req.auth && req.nextUrl.pathname !== '/') {
    const baseUrl = new URL('/', req.nextUrl.origin);
    return Response.redirect(baseUrl);
  }

  if (req.auth && req.nextUrl.pathname === '/') {
    const baseUrl = new URL('/dashboard', req.nextUrl.origin);
    return Response.redirect(baseUrl);
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};