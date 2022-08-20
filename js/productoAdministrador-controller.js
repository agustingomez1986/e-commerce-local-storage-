import { serviciosLocalStorage } from "../js/servicios/serviciosLocalStorage.js";
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
  const datos = serviciosLocalStorage.listaProductos();
  datos.forEach(({imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto, id})=>{
    const nuevoProducto = crearProductoAdministrador(imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto, id);
    const categoriaData = document.querySelector("[data-categorias= \"administrador\"]");
    categoriaData.appendChild(nuevoProducto);
  });
}

mostrarProductosAdministrador();