import createMiddleware from 'next-intl/middleware';
import {NextRequest,NextResponse} from 'next/server';
import {routing} from './i18n/routing';
const middleware=createMiddleware(routing);
export default function proxy(request:NextRequest){if(request.nextUrl.pathname==='/'){const saved=request.cookies.get('NEXT_LOCALE')?.value;if(saved==='ko')return NextResponse.redirect(new URL('/ko',request.url));}return middleware(request);}
export const config={matcher:['/((?!api|_next|_vercel|.*\\..*).*)']};
