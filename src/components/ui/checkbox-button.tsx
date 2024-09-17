import { UseFormRegister } from "react-hook-form";

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
    <label className="container flex flex-col">
      <div className="container flex items-center">
        <input type="checkbox" {...register(name)} />
        <div className="checkmark"></div>
        <p className="text-sm text-white [user-select:none]">
          Acepto los términos y condiciones
        </p>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </label>
  );
};
