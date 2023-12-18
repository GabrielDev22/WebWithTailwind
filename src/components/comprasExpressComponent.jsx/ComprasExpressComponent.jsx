import { VentaComponent } from "../venta/VentaComponent"


export const ComprasExpressComponent = () => {
  return (
    <div>
        <div className="bg-cyan-800 h-[500px] relative">
            <img className="w-full h-[500px] object-cover opacity-50" src="img/portadaCompraExpress.jpg" alt="" />
        </div>

        <h4 className="text-cyan-800 font-serif text-6xl ml-72 mt-20">LA PROPIEDADES EXCLUSIVAS</h4>
        <h2 className="text-cyan-800 font-cursive text-4xl ml-[41rem] mt-8">Compra</h2>

        <VentaComponent />

    </div>
  )
}
