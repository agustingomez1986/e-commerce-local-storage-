import { serviciosCRUD } from "../js/servicios/serviciosCRUD.js";
import { crearProductoAdministrador } from "./Servicios/crearProductoAdministrador.js";
import { crearTituloCategoria } from "./Servicios/crearTituloCategoria.js";

export const mostrarProductosAdministrador = ()=>{
  // BORRO PANTALLA
  const listaProductos = document.querySelector("[data-listaProductos]")
  var child = listaProductos.lastElementChild;
  while(child){
     listaProductos.removeChild(child);
     child = listaProductos.lastElementChild;
  }

  //BUSCO Y AGREGO PRODUCTOS
  const tituloCategoria = crearTituloCategoria("administrador", "agregarProducto");
  listaProductos.appendChild(tituloCategoria);
  serviciosCRUD
    .listaProductos()
    .then((datos)=>{
      datos.forEach(({imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto, id})=>{
        const nuevoProducto = crearProductoAdministrador(imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto, id);
        const categoriaData = document.querySelector("[data-categorias= \"administrador\"]");
        categoriaData.appendChild(nuevoProducto);
      });
  }).catch((error) => alert("Error producto administrador controller"));
}

mostrarProductosAdministrador();