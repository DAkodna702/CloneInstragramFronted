import React from "react";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <header className="flex items-center justify-center space-x-[650px]  px-6 py-3 border-b border-gray-200">
        <img src="/instagrammm.png" alt="Instagram" className="h-8" />
        <div className="flex gap-4 text-sm font-semibold items-center">
          <a
            href="/login2"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Iniciar sesión
          </a>
          <a href="/registrate" className="text-blue-600 hover:underline">
            Registrarte
          </a>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="border border-gray-300 bg-white w-full max-w-sm rounded-sm shadow-sm text-center overflow-hidden">
          {/* Contenido principal */}
          <div className="p-6">
            {/* Candado SVG */}
            <div className="flex justify-center mb-4">
              <svg
                aria-label="¿Tienes problemas para iniciar sesión?"
                fill="currentColor"
                height="96"
                role="img"
                viewBox="0 0 96 96"
                width="96"
              >
                <title>¿Tienes problemas para iniciar sesión?</title>
                <circle
                  cx="48"
                  cy="48"
                  fill="none"
                  r="47"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M60.931 70.001H35.065a5.036 5.036 0 0 1-5.068-5.004V46.005A5.036 5.036 0 0 1 35.065 41H60.93a5.035 5.035 0 0 1 5.066 5.004v18.992A5.035 5.035 0 0 1 60.93 70ZM37.999 39.996v-6.998a10 10 0 0 1 20 0v6.998"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>

            {/* Título y texto */}
            <h2 className="font-semibold text-sm mb-2">
              ¿Tienes problemas para iniciar sesión?
            </h2>
            <p className="text-gray-600 text-sm mb-4 leading-5">
              Ingresa tu correo electrónico, teléfono o nombre de usuario y te
              enviaremos un enlace para que recuperes el acceso a tu cuenta.
            </p>

            {/* Formulario */}
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Correo electrónico, teléfono o usuario"
                className="w-full bg-white border border-gray-300 text-black text-sm p-2 rounded-sm focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 text-sm font-semibold rounded-sm hover:bg-blue-600 transition"
              >
                Enviar enlace de inicio de sesión
              </button>
            </form>

            {/* Ayuda adicional */}
            <div className="mt-3">
              <a href="#" className="text-xs text-gray-600 hover:underline">
                ¿No puedes restablecer la contraseña?
              </a>
            </div>

            {/* Separador */}
            <div className="flex items-center justify-center my-4">
              <div className="flex-grow h-px bg-gray-300 mx-2"></div>
              <span className="text-gray-500 text-sm">O</span>
              <div className="flex-grow h-px bg-gray-300 mx-2"></div>
            </div>

            <a
              href="/registrate"
              className="text-sm text-black font-semibold hover:underline block"
            >
              Crear cuenta nueva
            </a>
          </div>

          {/* Botón fijo en la parte inferior del cuadro */}
          <a
            href="/login"
            className="block w-full border-t border-gray-300 py-3 text-sm font-semibold hover:bg-gray-100"
          >
            Volver al inicio de sesión
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-6 text-center text-gray-500 text-xs mt-auto">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:underline">
            Meta
          </a>
          <a href="#" className="hover:underline">
            Información
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Empleo
          </a>
          <a href="#" className="hover:underline">
            Ayuda
          </a>
          <a href="#" className="hover:underline">
            API
          </a>
          <a href="#" className="hover:underline">
            Privacidad
          </a>
          <a href="#" className="hover:underline">
            Condiciones
          </a>
          <a href="#" className="hover:underline">
            Ubicaciones
          </a>
          <a href="#" className="hover:underline">
            Instagram Lite
          </a>
          <a href="#" className="hover:underline">
            Threads
          </a>
          <a href="#" className="hover:underline">
            Importación de contactos y no usuarios
          </a>
          <a href="#" className="hover:underline">
            Meta Verified
          </a>
        </div>
        <div className="mt-2">
          <span className="hover:underline">Español</span> © 2025 Instagram from
          Meta
        </div>
      </footer>
    </div>
  );
}
