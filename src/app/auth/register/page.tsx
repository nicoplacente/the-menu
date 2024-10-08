"use server";

import { FormRegister } from "@/components/forms/form-register";

const Register = () => {
  return (
    <section className="flex w-full h-screen items-center p-4 md:p-0">
      <img
        src="/themenu.png"
        alt="YourCard"
        className="w-1/2 h-full object-cover hidden md:block"
      />
      <FormRegister />
    </section>
  );
};

export default Register;
