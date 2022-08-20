import { serviciosLocalStorage } from "../servicios/serviciosLocalStorage.js";
import { mostrarVentanaDescripcion } from "../verProductoVentana.js";

export const verProducto = (id)=>{
   const botonVerProducto = document.createElement("button");
   botonVerProducto.classList.add("contenido__producto__descripcion");
   botonVerProducto.innerHTML = "Ver producto";
   botonVerProducto.addEventListener("click", ()=>{
      const datos = serviciosLocalStorage.datoProducto(id);
      mostrarVentanaDescripcion(datos);
   });
   
   return botonVerProducto;
}