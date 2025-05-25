import React from "react";

export default function InstagramLogin2() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="border border-gray-300 p-6 shadow-sm w-[350px] bg-white">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="/instagrammm.png"
              alt="logo-instagram"
              className="w-[50%] h-auto object-cover"
            />
          </div>

          {/* Formulario de Login */}
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Teléfono, usuario o correo electrónico"
              required
              className="w-full border border-gray-300 p-2 text-sm bg-white text-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Contraseña"
              required
              className="w-full border border-gray-300 p-2 text-sm bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-1.5 text-sm font-semibold hover:bg-blue-600 transition"
            >
              Iniciar sesión
            </button>
          </form>

          {/* Separador */}
          <div className="flex items-center justify-center my-4">
            <div className="flex-grow h-px bg-gray-300 mx-2"></div>
            <span className="text-gray-500 text-sm">O</span>
            <div className="flex-grow h-px bg-gray-300 mx-2"></div>
          </div>

          {/* Botón Facebook */}
          <div className="flex justify-center mb-2">
            <button
              type="button"
              className="flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.483v-9.294H9.692v-3.622h3.116V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.591l-.467 3.622h-3.124V24h6.127C23.408 24 24 23.408 24 22.675V1.325C24 .592 23.408 0 22.675 0z" />
              </svg>
              Iniciar sesión con Facebook
            </button>
          </div>

          <div className="text-center text-sm">
            <a href="#" className="text-[#00376b] hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        {/* Caja adicional fuera del login */}
        <div className="mt-4 border border-gray-300 p-4 w-[350px] text-center bg-white text-sm">
          ¿No tienes una cuenta?
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            {" "}
            Regístrate
          </a>
        </div>

        {/* Descarga la app */}
        <div className="mt-6 text-center">
          <p className="mb-3 text-sm font-medium text-gray-700">
            Descarga la aplicación.
          </p>
          <div className="flex justify-center gap-2">
            <img
              src="/googleplay.png"
              alt="imagen1"
              className="w-[135px] h-auto"
            />
            <img
              src="/microsof.png"
              alt="imagen2"
              className="w-[120px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-6 text-center text-gray-500 text-xs">
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
