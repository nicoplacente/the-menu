interface InputType {
  type: string;
  className?: string;
  name: string;
  accept?: string;
  placeholder?: string;
}

export default function InputForm({
  type,
  className,
  name,
  accept,
  placeholder,
}: InputType) {
  return (
    <input
      type={type}
      name={name}
      className={`outline-none text-sm rounded-lg w-full ${className}`}
      accept={accept}
      placeholder={placeholder}
    />
  );
}
