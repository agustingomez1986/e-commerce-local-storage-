import { serviciosLocalStorage } from "../Servicios/serviciosLocalStorage.js";
import { crearTituloCategoria } from "../Servicios/crearTituloCategoria.js";
import { crearProductoUsuario } from "../Servicios/crearProductoUsuario.js";

export const verTodo = (categoriaSeleccionada)=>{
   const botonVerTodo = document.createElement("button");
   botonVerTodo.classList.add("contenido__categoria__boton");
   botonVerTodo.dataset.verTodo = categoriaSeleccionada;
   botonVerTodo.innerHTML = "Ver todo";
   botonVerTodo.addEventListener("click", ()=>{
      
      const listaProductos = document.querySelector("[data-listaProductos]");

      // BORRO PANTALLA
      var child = listaProductos.lastElementChild;
      while(child){
         listaProductos.removeChild(child);
         child = listaProductos.lastElementChild;
      }
      
      //BUSCO Y AGREGO PRODUCTOS
      const datos = serviciosLocalStorage.listaProductos();
      const tituloCategoria = crearTituloCategoria(categoriaSeleccionada, "index");
      listaProductos.appendChild(tituloCategoria)
      datos.forEach((dato)=>{
         if(dato.categoriaProducto == categoriaSeleccionada){
         const lis = document.querySelector("[data-categorias]");
            const nuevoProducto = crearProductoUsuario(dato.imagenProducto, dato.nombreProducto, dato.precioProducto, dato.id, false);
            lis.appendChild(nuevoProducto);
         }
      })
   });
   return botonVerTodo;
}