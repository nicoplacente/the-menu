export default function ValidateDynamicPath(pathname: string) {
  const isDynamicPage = /^\/[a-zA-Z0-9]+(\/[a-zA-Z0-9]+)?$/.test(pathname);

  const excludedPaths = [
    "/auth/login",
    "/auth/register",
    "/create-card",
    "/reset-password",
    "/terminos-y-condiciones",
    "/dashboard",
  ];

  if (isDynamicPage && !excludedPaths.includes(pathname)) {
    return false;
  }

  return true;
}
