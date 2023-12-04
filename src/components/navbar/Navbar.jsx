import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="bg-cyan-900 h-16 flex justify-between items-center">
      <div className="font-serif font-bold text-3xl m-3.5 text-white">Dev Gabriel</div>
      <div className=""> 
        <Link className="text-base font-serif m-3.5 text-white relative no-underline hover:transition-all hover:duration-300 hover:text-red-500 hover:border-b-1 hover:border-red-500" to='/'>Inicio</Link>
        <Link className="text-base font-serif m-3.5 text-white relative no-underline hover:transition-all hover:duration-300 hover:text-red-500 hover:border-b-1 hover:border-red-500" to='/propiedades'>Propiedades</Link>
        <Link className="text-base font-serif m-3.5 text-white relative no-underline hover:transition-all hover:duration-300 hover:text-red-500 hover:border-b-1 hover:border-red-500" to='/noticias'>Noticias</Link>
        <Link className="text-base font-serif m-3.5 text-white relative no-underline hover:transition-all hover:duration-300 hover:text-red-500 hover:border-b-1 hover:border-red-500" to='/equipo'>Equipo</Link>
      </div>
      <div className={`md:flex md:!container md:flex-column md:m-4 ${isOpen && "translate-x-0 !container"}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="w-8 h-2 bg-white mt-2 border rounded-sm origin-top-right transition-all duration-100"></span>
        <span className="w-8 h-2 bg-white mt-2 border rounded-sm origin-top-right transition-all duration-100"></span>
        <span className="w-8 h-2 bg-white mt-2 border rounded-sm origin-top-right transition-all duration-100"></span> 
      </div>
    </div>
  )
}
