import { verProducto } from "../botones/verProducto.js";

export const crearProductoUsuario = (imagenProducto, nombreProducto, precioProducto, id, solo6)=>{
   
   const producto = document.createElement("li");
   
   producto.classList.add("contenido__categoria__producto");

   if(solo6){
      producto.classList.add("contenido__categoria__producto--solo6");
   }
   
   const imagen = document.createElement("img");
   imagen.classList.add("contenido__producto__img");
   imagen.src = "data:image/png;base64," + imagenProducto;
   producto.appendChild(imagen);

   const titulo = document.createElement("h4");
   titulo.classList.add("contenido__producto__titulo");
   titulo.innerHTML = nombreProducto;
   producto.appendChild(titulo);

   const precio = document.createElement("p");
   precio.classList.add("contenido__producto__precio");
   precio.innerHTML = `$ ${precioProducto}`;
   producto.appendChild(precio);

   producto.appendChild(verProducto(id));
   
   return producto;
}