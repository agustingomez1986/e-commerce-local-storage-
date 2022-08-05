import { serviciosCRUD } from "./serviciosCRUD.js";

export const crearProductoAdministrador = (imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto, id)=>{
   const producto = document.createElement("li");
   producto.classList.add("contenido__categoria__producto");
   const contenido = `
      <img class="contenido__producto__img" src="${imagenProducto}">
      <button class="contenido__producto__boton contenido__producto__boton--trash" id="trashButton"><img src="assets/img/trash_icon.png"></button>
      <a href= "editarProducto.html?id=${id}"><button class="contenido__producto__boton contenido__producto__boton--edit" id="editButton"><img src="assets/img/edit_icon.png"></button></a>
      <h4 class="contenido__producto__titulo">${nombreProducto}</h4>
      <p class="contenido__producto__categoria">${categoriaProducto}</p>
      <p class="contenido__producto__precio">$${precioProducto}</p>
      <p class="contenido__producto__id">id: ${id}</p>`;
   producto.innerHTML = contenido;
   const trashButton = producto.querySelector("#trashButton");
   trashButton.addEventListener("click", ()=>{
      serviciosCRUD
         .eliminarProducto(id)
         .catch(err => alert("error crear producto administrador"));
   });
 
   return producto;
}