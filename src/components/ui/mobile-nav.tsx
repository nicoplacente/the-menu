export default function MobileNav() {
  return (
    <div
      className="show-nav w-60 bg-gradient-to-br to-orange-400 from-pink-500 text-white p-4 shadow-md shadow-gray-900/70 rounded-md fixed top-24 right-2 z-50"
      style={{ animation: "show .5s linear alternate" }}
    >
      <ul className="w-full flex flex-col gap-2">
        <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
          <button className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover hover:bg-gray-900/10 hover:shadow-inner transition-all ease-linear">
            Crea tu carta
          </button>
        </li>
        <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
          <button className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover hover:bg-gray-900/10 hover:shadow-inner transition-all ease-linear">
            Plan de Pago
          </button>
        </li>
        <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
          <button className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-lg bg-cover hover:bg-gray-900/10 hover:shadow-inner transition-all ease-linear">
            ¿Qué es Yourcard?
          </button>
        </li>
      </ul>
    </div>
  );
}
