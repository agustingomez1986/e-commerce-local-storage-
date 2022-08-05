import { serviciosCRUD } from "./servicios/serviciosCRUD.js";
import { categoriaUnica } from "./Servicios/categoriaUnica.js";
import { crearTituloCategoria } from "./Servicios/crearTituloCategoria.js";
import { crearProductoUsuario } from "./Servicios/crearProductoUsuario.js";

export const mostrarProductosUsuario = ()=>{
   // BORRO PANTALLA
   const listaProductos = document.querySelector("[data-listaProductos]")
   var child = listaProductos.lastElementChild;
   while(child){
      listaProductos.removeChild(child);
      child = listaProductos.lastElementChild;
   }

   //BUSCO Y AGREGO PRODUCTOS
   serviciosCRUD
      .listaProductos()
      .then((datos)=>{
         const categorias = categoriaUnica(datos);
         categorias.forEach((categoria) =>{
            const tituloCategoria = crearTituloCategoria(categoria, "verTodo");
            listaProductos.appendChild(tituloCategoria);
            datos.forEach((dato)=>{
               const categoriaItem = dato.categoriaProducto;
               if(categoria == categoriaItem){
                  const nuevoProducto = crearProductoUsuario(dato.imagenProducto, dato.nombreProducto, dato.precioProducto, dato.id, true);
                  const categoriaData = "[data-categorias= \""+categoria+"\"]";
                  const listaCategorias = document.querySelector(categoriaData);
                  listaCategorias.appendChild(nuevoProducto);
               }
            });
         });
   }).catch((error) => alert("Error producto usuario controller"));
}

mostrarProductosUsuario();