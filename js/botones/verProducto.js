import { serviciosCRUD } from "../servicios/serviciosCRUD.js";
import { mostrarVentanaDescripcion } from "../verProductoVentana.js";

export const verProducto = (id)=>{
   const botonVerProducto = document.createElement("button");
   botonVerProducto.classList.add("contenido__producto__descripcion");
   botonVerProducto.innerHTML = "Ver producto";
   botonVerProducto.addEventListener("click", ()=>{
      serviciosCRUD
         .datoProducto(id)
         .then((datos)=>{
            mostrarVentanaDescripcion(datos);
      }).catch((error) => alert("Error ver producto"));
   })
   
   return botonVerProducto;
}



