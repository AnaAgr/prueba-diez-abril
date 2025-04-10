let nombre = document.querySelector("#nombre");
let apellidos = document.querySelector("#apellidos");

function visualizar() {
   
   nombre = document.querySelector("#nombre").value;
   console.log(`este elemento es: ${nombre}`);

   apellidos = document.querySelector("#apellidos").value;
   console.log(`este elemento es: ${apellidos}`);

   let contenedor = document.querySelector("#contenedorResultado").innerHTML = `${nombre} ${apellidos}`;
}