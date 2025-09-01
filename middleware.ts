import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   const token = request.cookies.get("token")?.value;
  const protectedRoutes = [
    // "/dashboard",
    "/profile",
    "/schedule",
    "/schedule/pickup",
    "/wallet",
    // "/login",
    // "/register",
    "/services",
    "/contact",
    "/settings"
  ];
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );
  if (isProtected) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/dashboard",
    "/profile",
    "/schedule",
    "/schedule/pickup",
    "/wallet",
    // "/login",
    // "/register",
    "/services",
    "/contact",
    "/settings"
  ],
};
