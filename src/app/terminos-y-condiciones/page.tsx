import SectionContainer from "@/components/yourcard-landing/section-container";
import Parrafos from "@/components/ui/parrafos";

export default function TerminosYCondiciones() {
  return (
    <SectionContainer className="text-white">
      <h2 className="text-3xl font-semibold">
        Términos y Condiciones de TheMenu
      </h2>

      <ol className="list-decimal flex flex-col gap-4 my-9 px-4 [&>div>li]:text-lg">
        <div className="flex flex-col gap-4">
          <li className="font-semibold">Introducción</li>
          <Parrafos className="text-start">
            Bienvenido a TheMenu, una aplicación desarrollada por Codeluxe
            (codeluxe.tech), diseñada para ayudar a los usuarios a crear cartas
            digitales personalizadas para restaurantes. Al acceder y utilizar
            TheMenu, aceptas cumplir con los siguientes Términos y Condiciones.
            Si no estás de acuerdo con estos términos, te recomendamos que no
            utilices el servicio.
          </Parrafos>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Descripción del Servicio</li>
          <Parrafos className="text-start">
            TheMenu ofrece a los usuarios la posibilidad de crear cartas
            digitales personalizadas para restaurantes mediante dos planes de
            suscripción: Plan Básico y Plan Pro. Los usuarios pueden acceder a
            la plataforma mediante inicio de sesión con Google o registro
            directo en nuestro sitio web.
          </Parrafos>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Planes de Suscripción</li>

          <ul className="flex flex-col gap-2 list-disc pl-4">
            <li>Plan Básico (30.000 ARS/mes):</li>
            <ul className="pl-4 [&>li]:opacity-70 list-disc">
              <li>Mejora tu restaurante</li>
              <li>Crea tu carta digital única</li>
              <li>Gestiona precios y el stock</li>
              <li>Fácil de usar y personalizar</li>
              <li>Genera una buena impresión</li>
              <li>Obtendrás un código QR con acceso directo a la carta</li>
            </ul>
          </ul>

          <ul className="flex flex-col gap-2 list-disc pl-4">
            <li>
              Plan Pro (50.000 ARS/mes): Incluye todo lo del Plan Básico, más:
            </li>
            <ul className="pl-4 [&>li]:opacity-70 list-disc">
              <li>Destaca el plato del día</li>
              <li>Gestión de reservas</li>
              <li>
                Acceso a soporte para modificaciones únicas y personalizadas
              </li>
            </ul>
          </ul>

          <Parrafos className="text-start">
            Los usuarios pueden crear más de una carta de presentación de
            restaurante, pero deberán pagar una nueva suscripción por cada carta
            adicional.
          </Parrafos>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Registro y Cuenta de Usuario</li>
          <Parrafos className="text-start">
            Los usuarios pueden registrarse mediante su cuenta de Google o crear
            una cuenta directamente en TheMenu. Al registrarse, los usuarios
            aceptan:
          </Parrafos>

          <ul className="flex flex-col gap-2 list-disc pl-4 [&>li]:opacity-70">
            <li>
              Proporcionar información veraz y precisa durante el proceso de
              registro.
            </li>
            <li>
              Mantener la confidencialidad de sus credenciales de inicio de
              sesión.
            </li>
            <li>
              No crear cartas con información falsa, engañosa o contenido
              ofensivo. El incumplimiento de esta regla puede resultar en la
              suspensión o cancelación de la cuenta.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Uso Aceptable del Servicio</li>
          <Parrafos className="text-start">
            Al utilizar TheMenu, el usuario se compromete a:
          </Parrafos>

          <ul className="flex flex-col gap-2 list-disc pl-4 [&>li]:opacity-70">
            <li>
              No utilizar el servicio con fines ilegales o no autorizados.
            </li>
            <li>
              No generar cartas digitales con contenido falso, engañoso,
              ofensivo o que viole los derechos de terceros.
            </li>
            <li>Cumplir con todas las leyes y regulaciones aplicables.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Política de Pagos y Cancelación</li>

          <ul className="flex flex-col gap-2 list-disc pl-4 [&>li]:opacity-70">
            <li>
              Los pagos de los planes de suscripción se efectuarán mensualmente
              y no son reembolsables.
            </li>
            <li>
              Puedes cancelar tu suscripción en cualquier momento desde tu
              cuenta. Sin embargo, la cancelación solo afectará los pagos
              futuros, y no se reembolsarán los pagos ya realizados.
            </li>
            <li>
              En caso de crear múltiples cartas, cada una requerirá una nueva
              suscripción independiente.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Propiedad Intelectual</li>
          <Parrafos className="text-start">
            Todos los derechos sobre el contenido y diseño de TheMenu pertenecen
            a Codeluxe. Al utilizar nuestro servicio, el usuario no adquiere
            ningún derecho sobre el software, diseño o contenido proporcionado
            por la plataforma.
          </Parrafos>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Limitación de Responsabilidad</li>
          <Parrafos className="text-start">
            Codeluxe no será responsable de ningún daño directo o indirecto que
            resulte del uso de TheMenu. El servicio se ofrece "tal cual" y no
            garantizamos que esté libre de errores o interrupciones.
          </Parrafos>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Modificaciones a los Términos</li>
          <Parrafos className="text-start">
            Nos reservamos el derecho de modificar estos Términos y Condiciones
            en cualquier momento. Cualquier cambio será notificado a los
            usuarios y publicado en esta página. Al continuar utilizando el
            servicio, aceptas los nuevos términos.
          </Parrafos>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Legislación Aplicable</li>
          <Parrafos className="text-start">
            Estos Términos y Condiciones se regirán por las leyes de Argentina,
            y cualquier disputa se resolverá en los tribunales correspondientes.
          </Parrafos>
        </div>

        <div className="flex flex-col gap-4">
          <li className="font-semibold">Contacto</li>
          <Parrafos className="text-start">
            Si tienes preguntas sobre estos Términos y Condiciones, puedes
            contactarnos en{" "}
            <a
              className="hover:underline text-blue-300"
              href="mailto:codeluxetech@gmail.com"
            >
              Codeluxe
            </a>
          </Parrafos>
        </div>
      </ol>
    </SectionContainer>
  );
}
