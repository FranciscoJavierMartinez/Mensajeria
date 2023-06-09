//* Utilizo los selectores */
const numeroTelefonico = document.querySelector("#input-text"); //* Ya tengo capturado el numero de telefono */
const enviarWhats = document.querySelector(".submit-button");

const init = (numeroTelefonico) => {
  const numeroPagina = `https://wa.me/+52${numeroTelefonico}`;
  console.log(numeroPagina);
  window.open(numeroPagina);
};

enviarWhats.addEventListener("click", () => {
  init();
});

console.log(enviarWhats);
