import { Icon } from "@iconify/react"
import { useState } from "react"
const LoginPage = () => {
  const [image, setImage] = useState(true)
  return (
    <section className="flex flex-col pt-2 font-extrabold">
      <div className="flex items-center justify-center max-h-[220px] gap-4 relative">
        <button
          className="absolute right-2 bottom-2"
          onClick={() => setImage(!image)}
        >
          <Icon
            icon="fa:exchange"
            width="40"
            height="40"
            className="rounded-full p-2 bg-white text-main"
          />
        </button>
        {image ? (
          <>
            <div className="flex">
              <img
                src="/firstDog.png"
                alt="dog"
              />
            </div>
            <div className="flex">
              <img
                src="/secondDog.png"
                alt="dog"
              />
            </div>
          </>
        ) : (
          <img
            src="/thirdDog.svg"
            alt="dog"
          />
        )}
      </div>
      <div className="flex flex-col bg-white rounded-t-md h-full w-full p-4 gap-8">
        <h3 className="text-2xl">Te damos la bienvenida, humano</h3>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Ingresá tu correo electrónico"
              className="border border-black rounded-lg p-2 font-normal"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="Ingresá tu contraseña"
              className="border border-black rounded-lg p-2 font-normal"
            />
          </div>
          <small className="text-end">Me olvidé la contraseña</small>
          <button className="bg-main text-white rounded-lg p-2">
            Iniciar Sesión
          </button>
          <button className="flex justify-center items-center gap-2 border border-black rounded-lg p-2">
            <Icon
              icon="devicon:google"
              width="24"
              height="24"
            />
            Iniciar Sesión con google
          </button>
        </form>
        <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
          <p className="mx-4 mb-0 text-center dark:text-white">o</p>
        </div>
        <button className="p-2">Crear cuenta</button>
      </div>
    </section>
  )
}
export default LoginPage
