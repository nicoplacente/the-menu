export default function CheckBoxButton() {
  return (
    <label className="container">
      <input type="checkbox" />
      <div className="checkmark"></div>
      <p className="text-sm text-white [user-select:none]">
        Acepto los términos y condiciones
      </p>
    </label>
  );
}
