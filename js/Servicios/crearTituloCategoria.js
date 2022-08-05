import { botonAgregarProducto } from "../botones/botonAgregarProducto.js"
import { verTodo } from "../botones/verTodoCategorias.js";

/* "entrada":                                            "adicional:"
      "buscador": Indice / Palabra buscada: xxx             "verTodo": boton Ver todo
      "administrador": Indice / Todos los productos         "index": Indice / Nombre Categoría
      (categoriaProducto) = Nombre categoría                "agregarProducto": boton Agregar Producto  
*/ 
export const crearTituloCategoria = (entrada, adicional)=>{
   const titulo = document.createElement("div");
   titulo.classList.add("contenido__categoria__box");
   
   const divTitulo = document.createElement("div");
   divTitulo.classList.add("contenido__categoria__boxTitulo");
   titulo.appendChild(divTitulo);

   const categoriaTitulo = document.createElement("h3");
   categoriaTitulo.classList.add("contenido__categoria__titulo");
   if(entrada == "buscador"){
      const contenidoTitulo = `<a class="contenido__categoria__titulo--volver" href= "index.html">Inicio</a> / Palabra buscada: ${adicional}`
      categoriaTitulo.innerHTML = contenidoTitulo;
   }else if(entrada=="administrador"){
      const contenidoTitulo = `<a class="contenido__categoria__titulo--volver" href= "index.html">Inicio</a> / Todos los productos`
      categoriaTitulo.innerHTML = contenidoTitulo;
   } else {
      categoriaTitulo.innerHTML = entrada;
   }
   divTitulo.appendChild(categoriaTitulo);

   if(adicional=="verTodo"){
      divTitulo.appendChild(verTodo(entrada));
   } else if (adicional == "index"){
      const indexLink = `<a class="contenido__categoria__titulo--volver" href= "index.html">Inicio</a> / ${entrada}`
      categoriaTitulo.innerHTML = indexLink;
   } else if (adicional == "agregarProducto"){
      divTitulo.appendChild(botonAgregarProducto());
   }

   const lista = document.createElement("ul");
   lista.classList.add("contenido__categoria__productos");
   lista.dataset.categorias = entrada;
   titulo.appendChild(lista);
   
   return titulo;
}