export default function ValidateDynamicPath(pathname: string) {
  const excludedPaths = [
    "/auth/login",
    "/auth/register",
    "/create-card",
    "/reset-password",
    "/terminos-y-condiciones",
    "/dashboard",
    "/",
  ];

  if (!excludedPaths.includes(pathname)) {
    return false;
  }

  return true;
}
