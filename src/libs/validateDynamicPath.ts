export default function ValidateDynamicPath(pathname: string) {
  const excludedPaths = [
    "/auth/login",
    "/auth/register",
    "/create-card",
    "/create-card/preview",
    "/create-card/preview/add-categories",
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
