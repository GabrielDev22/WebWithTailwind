import { InfoContactoComponent } from "../infoContacto/InfoContactoComponent"
import styles from "../../styles.js"

export const EquipoComponent = () => {
  return (
    <div>
        <div className="bg-cyan-800 h-[500px] relative">
            <img className="w-full h-[500px] object-cover opacity-50" src="img/equipo/equipoPortada.jpg" alt="" />
        </div>

        <h3 className="mt-20 text-center text-3xl text-cyan-950">AL EQUIPO</h3>
        <h1 className="mt-4 mb-16 text-center text-cyan-950 text-5xl">Agentes</h1>

        <div className="flex flex-wrap">
            <div className={`${styles.boxShadow} w-[30rem] border-solid border-white ml-48 mb-20`}>
                <h2 className="text-3xl font-serif text-cyan-950 text-center">Gregorio Jasso</h2>
                <p className="font-serif text-center text-cyan-950">Agente #123.456.78</p>
                <img className="w-[25rem] h-[30rem] object-cover ml-8 mt-4" src="img/equipo/equipoPersonalOne.jpg" alt="" />
                <h3 className="text-2xl ml-8 mt-4">Email</h3>
                <p className="text-xl ml-8 mb-8">info@misitio.com</p>
                <h3 className="text-2xl ml-8 mt-4">Telefono</h3>
                <p className="text-xl ml-8 mb-8">+52-1-33-12345678</p>
            </div>

            <div className={`${styles.boxShadow} w-[30rem] border-solid border-white ml-48 mb-20`}>
                <h2 className="text-3xl font-serif text-cyan-950 text-center">Gregorio Jasso</h2>
                <p className="font-serif text-center text-cyan-950">Agente #123.456.78</p>
                <img className="w-[25rem] h-[30rem] object-cover ml-8 mt-4" src="img/equipo/equipoPersonalTwo.jpg" alt="" />
                <h3 className="text-2xl ml-8 mt-4">Email</h3>
                <p className="text-xl ml-8 mb-8">info@misitio.com</p>
                <h3 className="text-2xl ml-8 mt-4">Telefono</h3>
                <p className="text-xl ml-8 mb-8">+52-1-33-12345678</p>
            </div>

            <div className={`${styles.boxShadow} w-[30rem] border-solid border-white ml-48 mb-20`}>
                <h2 className="text-3xl font-serif text-cyan-950 text-center">Gregorio Jasso</h2>
                <p className="font-serif text-center text-cyan-950">Agente #123.456.78</p>
                <img className="w-[25rem] h-[30rem] object-cover ml-8 mt-4" src="img/equipo/equipoPersonalThree.jpg" alt="" />
                <h3 className="text-2xl ml-8 mt-4">Email</h3>
                <p className="text-xl ml-8 mb-8">info@misitio.com</p>
                <h3 className="text-2xl ml-8 mt-4">Telefono</h3>
                <p className="text-xl ml-8 mb-8">+52-1-33-12345678</p>
            </div>

            <div className={`${styles.boxShadow} w-[30rem] border-solid border-white ml-48 mb-20`}>
                <h2 className="text-3xl font-serif text-cyan-950 text-center">Gregorio Jasso</h2>
                <p className="font-serif text-center text-cyan-950">Agente #123.456.78</p>
                <img className="w-[25rem] h-[30rem] object-cover ml-8 mt-4" src="img/equipo/equipoPersonalFour.jpg" alt="" />
                <h3 className="text-2xl ml-8 mt-4">Email</h3>
                <p className="text-xl ml-8 mb-8">info@misitio.com</p>
                <h3 className="text-2xl ml-8 mt-4">Telefono</h3>
                <p className="text-xl ml-8 mb-8">+52-1-33-12345678</p>
            </div>

            <div className={`${styles.boxShadow} w-[30rem] border-solid border-white ml-48 mb-20`}>
                <h2 className="text-3xl font-serif text-cyan-950 text-center">Gregorio Jasso</h2>
                <p className="font-serif text-center text-cyan-950">Agente #123.456.78</p>
                <img className="w-[25rem] h-[30rem] object-cover ml-8 mt-4" src="img/equipo/equipoPersonalFive.jpg" alt="" />
                <h3 className="text-2xl ml-8 mt-4">Email</h3>
                <p className="text-xl ml-8 mb-8">info@misitio.com</p>
                <h3 className="text-2xl ml-8 mt-4">Telefono</h3>
                <p className="text-xl ml-8 mb-8">+52-1-33-12345678</p>
            </div>

            <div className={`${styles.boxShadow} w-[30rem] border-solid border-white ml-48 mb-20`}>
                <h2 className="text-3xl font-serif text-cyan-950 text-center">Gregorio Jasso</h2>
                <p className="font-serif text-center text-cyan-950">Agente #123.456.78</p>
                <img className="w-[25rem] h-[30rem] object-cover ml-8 mt-4" src="img/equipo/equipoPersonalSix.jpg" alt="" />
                <h3 className="text-2xl ml-8 mt-4">Email</h3>
                <p className="text-xl ml-8 mb-8">info@misitio.com</p>
                <h3 className="text-2xl ml-8 mt-4">Telefono</h3>
                <p className="text-xl ml-8 mb-8">+52-1-33-12345678</p>
            </div>
        </div>
            <InfoContactoComponent />
    </div>
  )
}
