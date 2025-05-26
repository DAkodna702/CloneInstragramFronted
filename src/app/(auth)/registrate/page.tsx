"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function InstagramRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    contact: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isPhone = (value:string) => /^\d{7,15}$/.test(value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { contact, password, confirmPassword, fullName, username } = formData;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    let payload: {
      username: string;
      password: string;
      fullName: string;
      bio: string | null;
      profilePicture: string | null;
      email: string | null;
      phoneNumber: string | null;
    } = {
      username,
      password,
      fullName,
      bio: null,
      profilePicture: null,
      email: null,
      phoneNumber: null,
    };

    if (isEmail(contact)) {
      payload.email = contact;
    } else if (isPhone(contact)) {
      payload.phoneNumber = contact;
    } else {
      alert("Ingresa un correo o número válido");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/vistas");
      } else {
        alert("Error al registrar");
      }
    } catch (error) {
      alert("Error en la conexión");
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Contenido principal */}
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

          <p className="font-medium text-sm text-[#737373] text-center mb-4">
            Regístrate para ver fotos y vídeos de tus amigos.
          </p>

          {/* Botón de Facebook */}
          <div className="flex justify-center mb-4">
            <button
              onClick={() => signIn("facebook")}
              type="button"
              className="flex items-center gap-2 w-[90%] justify-center bg-blue-600 text-white py-1.5 rounded text-sm font-semibold hover:bg-blue-700"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.483v-9.294H9.692v-3.622h3.116V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.591l-.467 3.622h-3.124V24h6.127C23.408 24 24 23.408 24 22.675V1.325C24 .592 23.408 0 22.675 0z" />
              </svg>
              Iniciar sesión con Facebook
            </button>
          </div>

          {/* Separador */}
          <div className="flex items-center justify-center my-4">
            <div className="flex-grow h-px bg-gray-300 mx-2"></div>
            <span className="text-gray-500 text-sm">O</span>
            <div className="flex-grow h-px bg-gray-300 mx-2"></div>
          </div>

          {/* Formulario */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="contact"
              placeholder="Correo electrónico o número de teléfono"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 text-sm bg-white text-black focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 text-sm bg-white text-black focus:outline-none"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 text-sm bg-white text-black focus:outline-none"
            />
            <input
              type="text"
              name="fullName"
              placeholder="Nombre completo"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 text-sm bg-white text-black focus:outline-none"
            />
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 text-sm bg-white text-black focus:outline-none"
            />

            <div className="text-center mt-2 text-[11px] text-[#737373]">
              Es posible que los usuarios de nuestro servicio hayan subido tu
              información de contacto en Instagram.
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Más información
              </a>
            </div>

            <div className="text-center mt-2 text-[11px] text-[#737373]">
              Al registrarte, aceptas nuestras
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Condiciones,
              </a>
              la{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Política de privacidad
              </a>
              y la{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Política de cookies
              </a>
              .
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-1.5 text-sm font-semibold hover:bg-blue-600 transition"
            >
              Registrarte
            </button>
          </form>
        </div>

        {/* Caja adicional fuera del registro */}
        <div className="mt-4 border border-gray-300 p-4 w-[350px] text-center bg-white text-sm">
          ¿Ya tienes cuenta?
          <a
            href="/login2"
            className="text-blue-600 font-semibold hover:underline"
          >
            {" "}
            Inicia sesión
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

      {/* Footer fuera del contenedor principal */}
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
