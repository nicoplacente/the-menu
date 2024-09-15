export default function YourcardInfo() {
  return (
    <article className="flex xl:items-center gap-12 xl:gap-0 xl:flex-row flex-col xl:justify-evenly">
      <img
        className="shadow-xl shadow-gray-900 rounded-lg object-cover xl:object-scale-down sm:h-96 xl:h-auto"
        src="https://imgs.search.brave.com/Cr8YGkQr1XX20KCk_yGfFtqHjjVyiWcvRtX-n5R3Ysg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9wcm9tb2Npb25l/cy1lc3BlY2lhbGVz/LWRpc2Vuby1tZW51/LXJlc3RhdXJhbnRl/LWF1ZGF6LWFwZXRp/dG9zby1jcmlzcHkt/ZnJpZWQtY2hpY2tl/bi1oaWdobGlnaHRf/OTc2NTY0LTE4MDgy/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
        alt="Carta preview"
      />
      <ul className="flex flex-col gap-9 w-full md:max-w-5xl xl:max-w-lg mx-auto">
        <li className="info-li">
          <span className="info-span">📱 Crea una carta digital única, </span>
          fácil de usar y totalmente personalizable para que refleje la esencia
          de tu marca.
        </li>

        <li className="info-li">
          <span className="info-span">✨ Destaca con lo mejor: </span>
          Resalta el plato del día, ajusta precios y controla el stock en tiempo
          real. ¡Todo a tu alcance!
        </li>

        <li className="info-li">
          <span className="info-span">🚀 Gestión total: </span>
          Maneja las reservas desde una sola plataforma, optimizando el tiempo y
          brindando una experiencia superior a tus clientes.
        </li>

        <li className="info-li">
          <span className="info-span">🔗 Códigos QR: </span>
          Ofrece a tus comensales acceso rápido a tu carta digital con un simple
          escaneo, sorpréndelos con una presentación moderna y profesional.
        </li>

        <li className="info-li">
          <span className="info-span">🔧 Soporte personalizado: </span>
          ¿Necesitas cambios únicos? ¡No hay problema! Nuestro equipo está
          disponible para modificar tu carta según tus necesidades. Haz que tu
          restaurante se destaque con YourCard.
        </li>

        <li className="info-li text-center">
          <span className="info-span">👉 YourCard:</span> La carta que
          transforma tu negocio.
        </li>

        <button className="relative animate-pulse hover:opacity-70 transition duration-300 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br to-orange-400 from-pink-500  text-white  focus:ring-4 focus:outline-none focus:ring-pink-800">
          <span className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 rounded-md">
            ¡Empieza hoy mismo y genera una impresión inolvidable!
          </span>
        </button>
      </ul>
    </article>
  );
}
