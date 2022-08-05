const cerrarDescripcion = (seccion)=>{
   const botonCerrar = document.createElement("button");
   botonCerrar.classList.add("contenido__descripcion__botonCerrar");
   botonCerrar.innerHTML = "X";
   botonCerrar.addEventListener("click", ()=>{
      var child = seccion.lastElementChild;
      while(child){
         seccion.removeChild(child);
         child = seccion.lastElementChild;
      }
      const contenido = document.querySelector("#contenido");
      contenido.removeChild(seccion);
   })
   return botonCerrar;
}

export const mostrarVentanaDescripcion = (datos)=>{
   const contenido = document.querySelector("#contenido");
   
   const seccionDescripcion = document.createElement("section");
   seccionDescripcion.classList.add("contenido__descripcion");
   contenido.appendChild(seccionDescripcion);

   const contenedor = document.createElement("div");
   contenedor.classList.add("contenido__descripcion__container");
   seccionDescripcion.appendChild(contenedor);
   
   const divImagen = document.createElement("div");
   divImagen.classList.add("contenido__descripcion__divImagen");
   contenedor.appendChild(divImagen)

   const imagen = document.createElement("img");
   imagen.classList.add("contenido__descripcion__imagen");
   imagen.src = datos.imagenProducto;
   divImagen.appendChild(imagen);

   const textoBox = document.createElement("div");
   textoBox.classList.add("contenido__descripcion__textoBox");
   contenedor.appendChild(textoBox)

   const titulo = document.createElement("p");
   titulo.classList.add("contenido__textoBox__titulo");
   titulo.innerHTML = datos.nombreProducto;
   textoBox.appendChild(titulo);

   const precio = document.createElement("p");
   precio.classList.add("contenido__textoBox__precio");
   precio.innerHTML = `$ ${datos.precioProducto}`;
   textoBox.appendChild(precio);

   const descripcion = document.createElement("p");
   descripcion.classList.add("contenido__textoBox__descripcion");
   descripcion.innerHTML = datos.descripcionProducto;
   textoBox.appendChild(descripcion);

   seccionDescripcion.appendChild(cerrarDescripcion(seccionDescripcion));


   return contenedor;
}