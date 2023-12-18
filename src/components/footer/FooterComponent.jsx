
export const FooterComponent = () => {
  return (
    <div className="bg-blue-950 h-[25rem] flex">
        
        <div className="w-[40rem]">
            <img className="w-[400px] h-[300px] ml-8" src="img/Real Estate Logo.png" alt="" />
            <p className="font-cursiva text-lg ml-[70px] text-white">Policita de privacidad</p>
            <p className="font-cursiva text-lg ml-[70px] text-white">© 2035 por DevGabo. Desarrollado y protegido por Neflify</p>
        </div>

        <div className="w-[60rem]">
            <ul className="flex justify-around mt-20 mb-12 list-none">
                <li className="font-serif text-xl text-white">Inicio</li>
                <li className="font-serif text-xl text-white">Propiedades</li>
                <li className="font-serif text-xl text-white">Noticias</li>
                <li className="font-serif text-xl text-white">Equipo</li>
                <li className="font-serif text-xl text-white">Contacto</li>
            </ul>

            <p className="font-serif text-xl text-white text-center mt-2">Av. Fray Antonio 10</p>
            <p className="font-serif text-xl text-white text-center mt-2">44100 Guadalajara, jal Mexico</p>
            <p className="font-serif text-xl text-white text-center mt-2">info@misitio.com</p>

            <div className="flex justify-around mt-16">
                <a href="https://www.instagram.com/iamgabo22/"><img className="bg-white cursor-pointer rounded-3xl border border-solid border-white" src="img/instagram.svg" alt="" /></a>
                <a href="https://es-la.facebook.com/"><img className="bg-white cursor-pointer rounded-3xl border border-solid border-white" src="img/facebook.svg" alt="" /></a>
                <a href="https://github.com/GabrielDev22"><img className="bg-white cursor-pointer rounded-3xl border border-solid border-white" src="img/github.svg" alt="" /></a>
                <a href="https://www.linkedin.com/in/gabriel-torres-431690229/"><img className="bg-white cursor-pointer rounded-3xl border border-solid border-white" src="img/linkedin.svg" alt="" /></a>
            </div>

        </div>

    </div>
  )
}
