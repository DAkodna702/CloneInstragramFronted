"use client";
import Link from "next/link";
import Image from "next/image";

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
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

      {/* Center Form */}
      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="border px-8 py-10 shadow-md rounded-md w-full max-w-md">
          <h2 className="text-center text-lg font-semibold mb-2">
            Crea una contraseña segura
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            La contraseña debe tener al menos seis caracteres e incluir una
            combinación de números, letras y caracteres especiales (¡$%@).
          </p>

          <input
            type="password"
            placeholder="Contraseña nueva"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring"
          />
          <input
            type="password"
            placeholder="Repetir contraseña nueva"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring"
          />

          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            onClick={() => {
              // Aquí puedes poner tu lógica o redirección
              console.log("Restablecer contraseña clickeado");
            }}
          >
            Restablecer contraseña
          </button>
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
