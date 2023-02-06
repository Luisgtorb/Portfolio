const lista = document.querySelector(".navegacion_lista");

lista.addEventListener("click", (event) =>{
  const objeto = lista.querySelector(".active");
  const elemento = event.target;
  if(objeto) {
    objeto.classList.remove("active")
  }
  if(elemento && elemento.tagName === "A") {
    elemento.classList.add("active");
  }
});
