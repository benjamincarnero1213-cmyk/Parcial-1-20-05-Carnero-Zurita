alert("Bienvenido a la Veterinaria, por favor complete el formulario para solicitar un turno");
const botonconfirmar = document.getElementById("confirmar");
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const dniInput = document.getElementById("dni");

botonconfirmar.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Turno solicitado con exito a nombre de " + nombreInput.value + " " + apellidoInput.value + " con DNI " + dniInput.value);
});