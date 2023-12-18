import { ClientesComponent } from "../components/clientes/ClientesComponent"
import { ContactanosComponent } from "../components/contactanos/ContactanosComponent"
import { FooterComponent } from "../components/footer/FooterComponent"
import { InfoContactoComponent } from "../components/infoContacto/InfoContactoComponent"
import { InicioComponent } from "../components/inicio/InicioComponent"
import { RentaComponent } from "../components/renta/RentaComponent"
import { VentaComponent } from "../components/venta/VentaComponent"


export const InicioPage = () => {
  return (
    <>
        <InicioComponent />
        <VentaComponent />
        <RentaComponent />  
        <ClientesComponent />
        <ContactanosComponent />
        <InfoContactoComponent />
        <FooterComponent />
    </>
  )
}
