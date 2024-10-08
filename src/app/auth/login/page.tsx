"use server";
import { FormLogin } from "@/components/forms/form-login";
const Login = () => {
  return (
    <section className="flex w-full h-screen items-center p-4 md:p-0">
      <img
        src="https://imgs.search.brave.com/OXOxyx32R_ZaOGTmDNEpOmSxoF2swtf2Soy3q8fErAk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5z/cGVjc2V1LmJpemF5/LmNvbS8yNC8xNC9l/bWVudGEtQTQucG5n/P3ZlcnNpb249M2E1/NDdjNDhlNmQ3Y2E2/ZWE2NWJjNWU1MGQ3/M2IzNzM"
        alt="YourCard"
        className="w-1/2 h-full object-cover hidden md:block"
      />
      <FormLogin />
    </section>
  );
};

export default Login;
