
/**
 * An Array of routes that are accessible to the public.
 * These routes do not require authentication.
 */
export const publicRoutes: string[] = [
];

/**
 * An Array of routes that are protected.
 * These routes require authentication.
 */
export const protectedRoutes: string[] = [
  "/",
];

/**
 * Authentication pages accessible without login.
 */
export const authRoutes: string[] = [
  "/auth/sign-in",
];

/**
 * API authentication route prefix.
 */
export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/";
