import { InicioComponent } from "../components/inicio/InicioComponent"
import { RentaComponent } from "../components/renta/RentaComponent"
import { VentaComponent } from "../components/venta/VentaComponent"


export const InicioPage = () => {
  return (
    <>
        <InicioComponent />
        <VentaComponent />
        <RentaComponent />  
    </>
  )
}
