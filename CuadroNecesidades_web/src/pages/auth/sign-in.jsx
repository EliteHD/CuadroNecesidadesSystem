import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SignIn() {
  return (

    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div
        class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        <div class="flex flex-col justify-center p-8 md:p-14">
          <span class="mb-3 text-4xl font-bold">Bienvenido!</span>
          <span class="font-light text-gray-400 mb-8">
            Sistema para el reporte en el cuadro de necesidades
          </span>
          <div class="py-4">
            <span class="mb-2 text-md">Correo Electronico</span>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div class="py-4">
            <span class="mb-2 text-md">Contraseña</span>
            <input
              type="password"
              name="pass"
              id="pass"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div class="flex justify-between w-full py-4">

            <span class="font-bold text-md">Olvide mi contraseña</span>
          </div>
          <button
            class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Iniciar Sesión
          </button>
          <button
            class="w-full border items-center content-center border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-red-900 hover:text-white"
          >
            {/* icon microsoft */}
            <img
              src="https://img.icons8.com/color/48/000000/microsoft.png"
              alt="microsoft"
              class="w-7 h-7 inline-block mr-2"
            />

            Iniciar Sesión con Microsoft
          </button>

        </div>
        <div class="relative">
          <img
            src="https://images.pexels.com/photos/4219101/pexels-photo-4219101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="img"
            class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          <div
            class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span class="text-white text-xl"
            >Cuadro de necesiades<br />Departamento de Planeación
              <br /><span className="text-sm text-gray-200" >Power by: Josias Dhz</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
