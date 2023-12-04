import { Link } from "react-router-dom"

export const RentaComponent = () => {
  return (
    <div>
        <h4 className="font-serif text-gray-500 text-2xl mt-36 text-center">NUEVOS PRECIOS</h4>
         <h2 className="font-serif text-blue-950 text-4xl text-center mt-6">En Renta</h2>

         <div className="flex justify-center flex-wrap rounded-xl">
            <div className="lg:w-[400px] lg:h-[32rem] m-12">
                <p className="font-serif text-xl w-24 p-1 absolute mt-3 bg-red-700 text-white">Renta</p>
                <img className="lg:w[400px] rounded-sm" src="img/rentaOne.webp" alt="" />
                
                <h3 className="text-gray-800 font-serif text-2xl ml-6 mt-6">Av Acueducto 1518</h3>
                <p>Guadalajara. Jal.. Mexico</p>
                <p>$44,000</p>
                <hr />

                <div>
                    <div>
                        <img src="img/habitacion.png" alt="" />
                        <p>Habitaciones</p>
                        <p>4</p>
                    </div>

                    <div>
                        <img src="img/banera.png" alt="" />
                        <p>Baños</p>
                        <p>2</p>
                    </div>

                    <div>
                        <img src="img/capas.png" alt="" />
                        <p>Niveles</p>
                        <p>3</p>
                    </div>

                    <div>
                        <img src="img/zona.png" alt="" />
                        <p>MT2</p>
                        <p>1234</p>
                    </div>
                </div>
            </div>
         </div>

            <div className="lg:w-[400px] lg:h-[32rem] m-12">
                <p className="font-serif text-xl w-24 p-1 absolute mt-3 bg-red-700 text-white">Renta</p>
                <img src="img/rentaTwo.jpeg" alt="" />
                
                <h3>Av Acueducto 1518</h3>
                <p>Guadalajara. Jal.. Mexico</p>
                <p>$44,000</p>
                <hr />

                <div>
                    <div>
                        <img src="img/habitacion.png" alt="" />
                        <p>Habitaciones</p>
                        <p>4</p>
                    </div>

                    <div>
                        <img src="img/banera.png" alt="" />
                        <p>Baños</p>
                        <p>2</p>
                    </div>

                    <div>
                        <img src="img/capas.png" alt="" />
                        <p>Niveles</p>
                        <p>3</p>
                    </div>

                    <div>
                        <img src="img/zona.png" alt="" />
                        <p>MT2</p>
                        <p>1234</p>
                    </div>
                </div>
            </div>
         
            <div className="lg:w-[400px] lg:h-[32rem] m-12">
                <p className="font-serif text-xl w-24 p-1 absolute mt-3 bg-red-700 text-white">Renta</p>
                <img src="img/rentaThree.jpeg" alt="" />
                
                <h3>Av Acueducto 1518</h3>
                <p>Guadalajara. Jal.. Mexico</p>
                <p>$44,000</p>
                <hr />

                <div>
                    <div>
                        <img src="img/habitacion.png" alt="" />
                        <p>Habitaciones</p>
                        <p>4</p>
                    </div>

                    <div>
                        <img src="img/banera.png" alt="" />
                        <p>Baños</p>
                        <p>2</p>
                    </div>

                    <div>
                        <img src="img/capas.png" alt="" />
                        <p>Niveles</p>
                        <p>3</p>
                    </div>

                    <div>
                        <img src="img/zona.png" alt="" />
                        <p>MT2</p>
                        <p>1234</p>
                    </div>
                </div>
            </div>
      

            <div className="lg:w-[400px] lg:h-[32rem] m-12">
                <p className="font-serif text-xl w-24 p-1 absolute mt-3 bg-red-700 text-white">Renta</p>
                <img src="img/rentaFour.webp" alt="" />
                
                <h3>Av Acueducto 1518</h3>
                <p>Guadalajara. Jal.. Mexico</p>
                <p>$44,000</p>
                <hr />

                <div>
                    <div>
                        <img src="img/habitacion.png" alt="" />
                        <p>Habitaciones</p>
                        <p>4</p>
                    </div>

                    <div>
                        <img src="img/banera.png" alt="" />
                        <p>Baños</p>
                        <p>2</p>
                    </div>

                    <div>
                        <img src="img/capas.png" alt="" />
                        <p>Niveles</p>
                        <p>3</p>
                    </div>

                    <div>
                        <img src="img/zona.png" alt="" />
                        <p>MT2</p>
                        <p>1234</p>
                    </div>
                </div>
            </div>

        <Link to="/compraExpress"><button>Ver mas</button></Link>

    </div>
  )
}
