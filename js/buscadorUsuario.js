import { mostrarProductosUsuario } from "./productoUsuario-controller.js";
import { crearProductoUsuario } from "./Servicios/crearProductoUsuario.js";
import { crearTituloCategoria } from "./Servicios/crearTituloCategoria.js";
import { serviciosCRUD } from "./servicios/serviciosCRUD.js";

const buscador = ()=>{
   const inputBuscador = document.querySelector("[data-buscador]");
   inputBuscador.addEventListener("input", function(){
      if(this.value.length > 0){
         // BORRO PANTALLA
         const listaProductos = document.querySelector("[data-listaProductos]")
         var child = listaProductos.lastElementChild;
         while(child){
            listaProductos.removeChild(child);
            child = listaProductos.lastElementChild;
         }

         //BUSCO Y AGREGO PRODUCTOS
         const categoriaTitulo = crearTituloCategoria("buscador", this.value);
         listaProductos.appendChild(categoriaTitulo);

         serviciosCRUD
            .listaProductos()
            .then((datos)=>{
               datos.forEach((dato)=>{
                  var expresion = new RegExp(this.value, "i");
                  if(expresion.test(dato.nombreProducto)){
                     const nuevoProducto = crearProductoUsuario(dato.imagenProducto, dato.nombreProducto, dato.precioProducto, dato.id);
                     const categoria = "buscador"
                     const categoriaData = "[data-categorias= \""+categoria+"\"]";
                     const listaCategorias = document.querySelector(categoriaData);
                     listaCategorias.appendChild(nuevoProducto);
                  }
               })
         }).catch((error) => alert("Error buscador"));
      } else {
         mostrarProductosUsuario();
      }
   })
}

buscador();