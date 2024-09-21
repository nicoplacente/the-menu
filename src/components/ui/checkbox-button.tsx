import Link from "next/link";

export default function CheckBoxButton() {
  return (
    <label className="container">
      <input type="checkbox" />
      <div className="checkmark"></div>
      <Link
        href="/terminos-y-condiciones"
        className="text-sm text-white [user-select:none] hover:underline"
      >
        Acepto los términos y condiciones
      </Link>
    </label>
  );
}
