import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/admin"];
const authPath = "/admin/login";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("admin_token")?.value;

  const isProtected = protectedPaths.some(
    (path) => pathname.startsWith(path) && pathname !== authPath
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL(authPath, request.url));
  }

  if (pathname === authPath && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
