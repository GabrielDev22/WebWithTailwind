import { useState } from "react"


export const Tailwind = () => {

  const [click, setClick] = useState(false);

  const handleAnimar = () => {
    console.log('Se hizo click')
    setClick(!click)
  }

  

  return (
    <>
        <h1 className="text-3xl font-bold underline">Tailwind</h1>

        <div>
            <div className="w-full h-8 rounded-xl bg-slate-500">
                <div className={`w-0 h-7 ml-0.1  rounded-xl bg-black ${click ? 'w-full' : ''}`}></div>
            </div>
            <button className="w-20 bg-stone-600 p-1 rounded-lg mt-5 ml-96 hover:bg-sky-700" onClick={handleAnimar}>Animar</button>
        </div>

        <div className="bg-slate-500 w-100 h-96 flex flex-row flex-wrap justify-center justify-">
            <div className="bg-white w-20 h-20 border-4 border-black mt-24 ml-20 transition-all 3s ease-out hover:scale-150"></div>
            <div className="bg-white w-20 h-20 border-4 border-black mt-24  transition-all 3s ease-out hover:translate-y-20  ml-20"></div>
            <div className="bg-white w-20 h-20 border-4 border-black mt-24 ml-20 transition-all 3s ease-out hover:translate-x-20"></div>
            <div className="bg-white w-20 h-20 border-4 border-black mt-24 ml-20 transition-all 3s ease-out hover:rotate-45"></div>
            <div className="bg-white w-20 h-20 border-4 border-black mt-24 ml-20 transition-all 3s ease-out hover:rotate-86 "></div>
            <div className="bg-white w-20 h-20 border-4 border-black mt-24 ml-20 transition-all 3s ease-out hover:rotate-12 "></div>
        </div>


        <div className="w-full h-screen bg-slate-800 mt-20 mb-20 flex justify-center items-center">
          <div className="w-80 h-60 bg-white text-center rounded-md border-solid border-4 border-black ">
            <h1 className="border-b-4 text-xl font-serif">Hola Mundo</h1>
            <p className="mt-10 font-mono">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestiae doloremque quidem eius dignissimos ut!
            </p>
          </div>

          <div className="w-80 h-60 bg-white text-center rounded-md ml-10 border-solid border-4 border-black">
            <h1 className="border-b-4 text-xl font-serif">Hola Mundo</h1>
            <p className="mt-10 font-mono">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestiae doloremque quidem eius dignissimos ut!
            </p>
          </div>

          <div className="w-80 h-60 bg-white text-center rounded-md ml-10 border-solid border-4 border-black">
            <h1 className="border-b-4 text-xl font-serif">Hola Mundo</h1>
            <p className="mt-10 font-mono">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestiae doloremque quidem eius dignissimos ut!
            </p>
          </div>
        </div>

          <div className="bg-orange-950 flex flex-col justify-center items-center">
              <div className="mt-10 mb-10 border-solid border-4 border-white">
                <h1 className="text-black font-mono text-4xl absolute mt-28 ml-28">Imagen 1</h1>
                <p className="w-60 text-white font-mono absolute text-center mt-40 ml-14 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deleniti!
                </p>
                <img className="w-96 h-96 opacity-15" src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className="mt-10 mb-10">
                <h1 className="text-black font-mono text-4xl absolute mt-28 ml-28">Imagen 2</h1>
                <p className="w-60 text-white font-mono absolute text-center mt-40 ml-14 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deleniti!
                </p>
                <img className="w-96 h-96" src="https://images.unsplash.com/photo-1700578075560-ebacba6e5d22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className="mt-10 mb-10">
                <h1 className="text-black font-mono text-4xl absolute mt-28 ml-28">Imagen 3</h1>
                <p className="w-60 text-white font-mono absolute text-center mt-40 ml-14 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deleniti!
                </p>
                <img className="w-96 h-96" src="https://images.unsplash.com/photo-1661240794784-ca1cb2008b6f?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
          </div>



          <div className="h-100% bg-blue-700 mt-20 flex flex-wrap justify-center items-center">
              <h1 className="text-8xl text-white mt-10">Hola Mundo</h1>
              <p className="w-26 text-xl text-white mt-6 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ducimus voluptate nostrum rem quibusdam corrupti.
              </p>

              <div className="w-96 h-48 bg-amber-200 border border-solid border-black m-6 rounded-lg ease-in-out duration-500 hover:bg-slate-400">
                <h2 className="font-mono text-4xl text-center mt-8 ease-in-out duration-300 font-bold hover:text-red-800 hover:scale-110">Titulo 1</h2>
                <div>
                  <p className="w-80 ml-6 text-center mt-2 font-serif ease-in duration-300 hover:text-red-800 hover:scale-110">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.
                  </p>
                </div>
              </div>

              <div className="w-96 h-48 bg-amber-200 border border-solid border-black m-6">
                <h2 className="font-mono text-4xl text-center mt-8 ease-in-out duration-300 font-bold hover:text-red-800 hover:scale-110">Titulo 2</h2>
                <div>
                  <p className="w-80 ml-6 text-center mt-2 font-serif ease-in duration-300 hover:text-red-800 hover:scale-110">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.
                  </p>
                </div>
              </div>

              <div className="w-96 h-48 bg-amber-200 border border-solid border-black m-6">
                <h2 className="font-mono text-4xl text-center mt-8 ease-in-out duration-300 font-bold hover:text-red-800 hover:scale-110">Titulo 3</h2>
                <div>
                  <p className="w-80 ml-6 text-center mt-2 font-serif ease-in duration-300 hover:text-red-800 hover:scale-110">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.
                  </p>
                </div>
              </div>

              <div className="w-96 h-48 bg-amber-200 border border-solid border-black m-6">
                <h2 className="font-mono text-4xl text-center mt-8 ease-in-out duration-300 font-bold hover:text-red-800 hover:scale-110">Titulo 4</h2>
                <div>
                  <p className="w-80 ml-6 text-center mt-2 font-serif ease-in duration-300 hover:text-red-800 hover:scale-110">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.
                  </p>
                </div>
              </div>

              <div className="w-96 h-48 bg-amber-200 border border-solid border-black m-6">
                <h2 className="font-mono text-4xl text-center mt-8 ease-in-out duration-300 font-bold hover:text-red-800 hover:scale-110">Titulo 5</h2>
                <div>
                  <p className="w-80 ml-6 text-center mt-2 font-serif ease-in duration-300 hover:text-red-800 hover:scale-110">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.
                  </p>
                </div>
              </div>

              <div className="w-96 h-48 bg-amber-200 border border-solid border-black m-6">
                <h2 className="font-mono text-4xl text-center mt-8 ease-in-out duration-300 font-bold hover:text-red-800 hover:scale-110">Titulo 6</h2>
                <div>
                  <p className="w-80 ml-6 text-center mt-2 font-serif ease-in duration-300 hover:text-red-800 hover:scale-110">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.
                  </p>
                </div>
              </div>

              <div className="w-96 h-48 bg-amber-200 border border-solid border-black m-6">
                <h2 className="font-mono text-4xl text-center mt-8 ease-in-out duration-300 font-bold hover:text-red-800 hover:scale-110">Titulo 7</h2>
                <div>
                  <p className="w-80 ml-6 text-center mt-2 font-serif ease-in duration-300 hover:text-red-800 hover:scale-110">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.
                  </p>
                </div>
              </div>

              <div className="w-96 h-48 bg-amber-200 border border-solid border-black m-6">
                <h2 className="font-mono text-4xl text-center mt-8 ease-in-out duration-300 font-bold hover:text-red-800 hover:scale-110">Titulo 8</h2>
                <div>
                  <p className="w-80 ml-6 text-center mt-2 font-serif ease-in duration-300 hover:text-red-800 hover:scale-110">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam.
                  </p>
                </div>
              </div>

          </div>
    </>
  )
}
