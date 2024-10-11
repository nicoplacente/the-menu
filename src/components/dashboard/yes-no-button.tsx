export default function YesNoButton({ name }: { name: string }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        className="sr-only peer outline-none focus:outline-none"
        type="checkbox"
        name={name}
      />
      <div className="peer rounded-br-2xl rounded-tl-2xl outline-none duration-100 after:duration-500 w-28 h-14 bg-red-500 peer-checked:bg-green-500 peer-focus:ring-0 after:content-['No'] after:absolute after:rounded-br-xl after:rounded-tl-xl after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center after:text-red-800 peer-checked:after:text-green-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['Yes']"></div>
    </label>
  );
}
