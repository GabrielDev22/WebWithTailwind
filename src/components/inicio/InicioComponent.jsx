

export const InicioComponent = () => {
  return (
    <div>
        <div className="bg-white">
            <h2 className="text-black font-serif text-4xl lg:ml-[32rem] mt-60 absolute drop-shadow-2xl">Nuevos Precios</h2>
            <p className="absolute lg:ml-[30rem] mt-80 font-serif text-2xl text-black drop-shadow-2xl">EXCLUSIVOS DE CUVIER</p>
            <button className="bg-red-800 w-44 p-1 absolute lg:ml-[33rem] lg:mt-[25rem] border-solid border-2 border-gray-200"><a className="text-white text-none font-serif text-2sm" href="">Explorar</a></button>
            <div className="w-100% h-100%">
                <img className="w-100% h-100% object-cover object-right-left" src="img/imagenInicio.webp" alt="" />
            </div>
        </div>

        <div className="lg:h-[40rem] rounded-xl bg-blue-900">
            <h2 className="text-white ml-96 mt-32 mb-8 font-serif text-4xl">¿QUE ESTAS BUSCANDO?</h2>
            <div className="flex justify-center">
                <div className="opacity-90 shadow-lg shadow-cyan-950">
                    <a href=""><h3 className="text-white text-7xl absolute ml-32 mt-56 hover:text-red-700">Comprar</h3></a>
                    <img className="lg:w-[35rem] lg:h-[30rem]" src="img/casaInicio.jpg" alt="" />
                </div>

                <div className="opacity-90 shadow-lg shadow-cyan-950">
                    <a href=""><h3 className="text-white text-7xl absolute ml-32 mt-60 hover:text-red-700">Venta</h3></a>
                    <img className="lg:w-[35rem] lg:h-[30rem]" src="img/ventaCasa.jpg" alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}
