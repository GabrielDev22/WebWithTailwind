

export const InfoContactoComponent = () => {
  return (
    <div className="w-full h-[40rem] bg-blue-950 flex">
        <div className="w-[50rem]">
            <div className="w-[50rem]">
                <h4 className="font-serif text-center mt-40 text-4xl text-white">Enceuntra tu casa</h4>
                <p className="font-serif w-[30rem] text-center ml-40 mt-12 text-xl text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ut quo fugit ratione, mollitia hic reprehenderit, maiores asperiores veniam possimus nobis excepturi autem enim inventore culpa, totam perspiciatis ipsa at?
                </p>  
            </div>
        </div>

    <div className="w-[90rem] flex">
        <form className="w-[40rem] mt-12 flex flex-col">
            <label className="text-xl font-serif text-white mt-5">Nombre</label>
            <input type="text" className="bg-white w-[25rem] p-1 outline-0 border-0 border-b-[3px] bg-transparent text-white text-xl" required />

            <label className="text-xl font-serif text-white mt-5">Apellido</label>
            <input type="text" className="bg-white w-[25rem] p-1 outline-0 border-0 border-b-[3px] bg-transparent text-white text-xl" required />

            <label className="text-xl font-serif text-white mt-5">Email</label>
            <input type="text" className="bg-white w-[25rem] p-1 outline-0 border-0 border-b-[3px] bg-transparent text-white text-xl" required />

            <div className="mt-10">
                <label className="text-xl font-serif text-white mt-5">Me interesa:</label>
                <input type="radio" className="ml-10" />
                <label className="text-xl font-serif text-white mt-5">Comprar</label>
                <input type="radio" className="ml-10" />
                <label className="text-xl font-serif text-white mt-5">Renta</label>
                <input type="radio" className="ml-10" />
                <label className="text-xl font-serif text-white mt-5">Otro</label>
            </div>

            <label className="text-xl font-serif text-white mt-5 ml-48">Mensaje</label>
            <textarea cols="30" rows="10" className="bg-white w-[30rem] rounded-lg"></textarea>
        </form>
    </div>
    </div>
  )
}
