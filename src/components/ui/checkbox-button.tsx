import { UseFormRegister } from "react-hook-form";
import Link from "next/link";
interface CheckProps {
  name: string;
  register: UseFormRegister<any>;
  error?: any;
}

export const CheckBoxButton: React.FC<CheckProps> = ({
  name,
  error,
  register,
}) => {
  return (
    <>
      <label className="container">
        <input type="checkbox" {...register(name)} />
        <div className="checkmark"></div>
        <Link
          href="/terminos-y-condiciones"
          className="text-sm text-white [user-select:none] hover:underline"
        >
          Acepto los términos y condiciones
        </Link>
      </label>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </>
  );
};
