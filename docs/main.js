const paginaWhats = `https://wa.me/+52`;
const numeroTelefonicoDOM = document.getElementById("#numero-telefonico"); //* Ya tengo el numero telefonico */

document.querySelector(".btnEnviar").addEventListener("click", () => {
  const pagina = Number(document.querySelector(".numero-telefonico").value);

  console.log(paginaWhats + pagina);

  nuevoWhats = window.open(paginaWhats + pagina);
});
