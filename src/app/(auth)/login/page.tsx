import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InstagramLogin() {
  return (
    <div className="bg-white">
      <div className="flex w-full h-screen">
        {/* Contenedor de Imagen (izquierda) */}
        <div className="w-[55%] flex items-center justify-center">
          <img
            src="/instagramLogoInicio.png" // Asegúrate de que la ruta sea correcta
            alt="Imagen de login"
            className="w-full h-[450px] object-contain ml-[20%]"
          />
        </div>

        {/* Contenedor del Login (derecha) */}
        <div className="w-[45%] flex items-center justify-center">
          <div className="w-full max-w-[350px] h-[407px] mr-[10%]">
            <div className="flex justify-center mb-4">
              <img
                src="/instagrammm.png"
                alt="logo-instagram"
                className="w-[50%] h-auto"
              />
            </div>

            {/* Formulario */}
            <form className="space-y-4 flex flex-col items-center">
              <Input
                type="email"
                placeholder="Correo electrónico"
                required
                className="w-[90%] border border-gray-300 px-3 py-2 rounded text-sm"
              />
              <Input
                type="password"
                placeholder="Contraseña"
                required
                className="w-[90%] border border-gray-300 px-3 py-2 rounded text-sm"
              />
              <Button
                type="submit"
                className="w-[90%] bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:none"
              >
                Iniciar sesión
              </Button>
            </form>

            {/* Separador */}
            <div className="flex items-center justify-center my-4">
              <div className="flex-grow h-px bg-gray-300 mx-2"></div>
              <span className="text-gray-500 text-sm">O</span>
              <div className="flex-grow h-px bg-gray-300 mx-2"></div>
            </div>

            {/* Botón de Facebook */}
            <div className="flex justify-center mb-4">
              <Button
                type="button"
                variant="link"
                className="flex items-center gap-2 w-[70%] justify-center  text-blue-600 py-2 rounded text-sm font-semibold "
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.483v-9.294H9.692v-3.622h3.116V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.591l-.467 3.622h-3.124V24h6.127C23.408 24 24 23.408 24 22.675V1.325C24 .592 23.408 0 22.675 0z" />
                </svg>
                Iniciar sesión con Facebook
              </Button>
            </div>

            <div className="text-center mt-2 text-sm">
              <a href="/olvidar" className="text-[#00376b] hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <div className="text-center text-sm mt-8">
              ¿No tienes una cuenta?
              <a
                href="/registrate"
                className="text-blue-500 font-semibold hover:underline"
              >
                {" "}
                Regístrate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-300 py-6 mt-auto">
        <div className="w-full h-full px-8 flex flex-wrap justify-center gap-[20px] text-xs text-gray-500">
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
            Subir contactos y personas no usuarias
          </a>
          <a href="#" className="hover:underline">
            Meta Verified
          </a>
        </div>
        <div className="max-w-4xl mx-auto px-8 mt-2 text-center text-xs text-gray-400">
          <a href="#" className="hover:underline">
            Español (España)
          </a>{" "}
          © 2025 Instagram of Aaron
        </div>
      </footer>
    </div>
  );
}
