import { crearTituloCategoria } from "../Servicios/crearTituloCategoria.js";
import { serviciosCRUD } from "../Servicios/serviciosCRUD.js";
import { crearProductoUsuario } from "../Servicios/crearProductoUsuario.js";

const verPromocional  = document.querySelector("#verPromocional");
verPromocional.addEventListener("click", function(){
   const categoriaSeleccionada = "Consolas"
   
   const listaProductos = document.querySelector("[data-listaProductos]");

   // BORRO PANTALLA
   var child = listaProductos.lastElementChild;
   while(child){
      listaProductos.removeChild(child);
      child = listaProductos.lastElementChild;
   }
   
   //BUSCO Y AGREGO PRODUCTOS
   serviciosCRUD
      .listaProductos()
      .then((datos)=>{
         const tituloCategoria = crearTituloCategoria(categoriaSeleccionada, "index");
         listaProductos.appendChild(tituloCategoria)
         datos.forEach((dato)=>{
            if(dato.categoriaProducto == categoriaSeleccionada){
               const lis = document.querySelector("[data-categorias]");
               const nuevoProducto = crearProductoUsuario(dato.imagenProducto, dato.nombreProducto, dato.precioProducto, false);
               lis.appendChild(nuevoProducto);
            }
         })
   }).catch((error) => alert("Error ver todo categorias"));
});
