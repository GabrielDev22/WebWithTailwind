

export const ContactanosComponent = () => {
  return (
    <div className="lg:h-[30rem] border-solid border-white bg-gray-200">
        <h4 className="mt-20 text-center text-4xl text-gray-700">!La casa de tu sueños a un paso¡</h4>
        <div className="flex justify-around mt-20">
            <div className="w-80 h-48">
                <img className="ml-28" src="img/telefono.svg" alt="" />
                <h3 className="font-serif text-2xl text-gray-600 mt-1 text-center">Llamanos</h3>
                <p className="w-64 text-gray-950 text-xl font-serif text-center mt-4 ml-10 ">Llamadas gratis 1-800-000-000</p>
            </div>

            <div className="w-80 h-48">
                <img className="ml-28" src="img/mapa.svg" alt="" />
                <h3 className="font-serif text-2xl text-gray-600 mt-1 text-center">Encuentranos</h3>
                <p className="w-64text-gray-950 text-xl font-serif text-center mt-4 ml-10 ">Av Fray Antonio Alcalde 10 44100 Guadalajara, Jal Mexico</p>
            </div>

            <div className="w-80 h-48">
                <img className="ml-28" src="img/gmail.svg" alt="" />
                <h3 className="font-serif text-2xl text-gray-600 mt-1 text-center">Enviar Email</h3>
                <p className="w-64 text-gray-950 text-xl font-serif text-center mt-4 ml-10 ">Correo directo info@misitio.com</p>
            </div>

        </div>
    </div>
  )
}
