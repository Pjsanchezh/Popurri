// Ejercicio Uno

// const titulo = document.querySelector("#titulo");
// const formulario = document.querySelector("#formulario");
// const nombre = document.querySelector("#nombre");
// const asunto = document.querySelector("#asunto");
// const mensaje = document.querySelector("#mensaje");
// const boton = document.querySelector("#boton");
// const regExpLetras = /^[a-zA-Z]+$/gi;

// formulario.addEventListener("submit", (evento) => {
//   evento.preventDefault();

//   if (
//     regExpLetras.test(nombre.value) ||
//     regExpLetras.test(asunto.value) ||
//     regExpLetras.test(mensaje.value)
//   ) {
//     const resultado = document.querySelector(".resultado");
//     return (resultado.innerHTML = "Mensaje enviado con exito !!!");
//   }

//   if (!nombre.value.trim() || !regExpLetras.test(nombre.value)){
//     const errorNombre = document.querySelector(".errorNombre");
//     (errorNombre.innerHTML = "El nombre es requerido.");
//   }

//   if (!asunto.value.trim() || !regExpLetras.test(asunto.value)) {
//     const errorAsunto = document.querySelector(".errorAsunto");
//     (errorAsunto.innerHTML = "El asunto es requerido.");
//   }

//   if (!mensaje.value.trim() || !regExpLetras.test(mensaje.value)) {
//     const errorMensaje = document.querySelector(".errorMensaje");
//     (errorMensaje.innerHTML = "El mensaje es requerido.");
//   }

// });

// Ejercicio Dos

// const btn1 = document.querySelector("#btn-1");
// const btn2 = document.querySelector("#btn-2");
// const btn3 = document.querySelector("#btn-3");
// const btn4 = document.querySelector("#btn-4");
// const btn5 = document.querySelector("#btn-5");
// const btn6 = document.querySelector("#btn-6");
// const caja = document.querySelector("#caja");

// btn1.addEventListener("click", () => {
//     caja.style.backgroundColor = "#e53e3e";
// });

// btn2.addEventListener("click", () => {
//     caja.style.backgroundColor = "#dd6b20";
// });

// btn3.addEventListener("click", () => {
//     caja.style.backgroundColor = "#faf089";
// });

// btn4.addEventListener("click", () => {
//     caja.style.backgroundColor = "#48bb78";
// });

// btn5.addEventListener("click", () => {
//     caja.style.backgroundColor = "#81e6d9";
// });

// btn6.addEventListener("click", () => {
//     caja.style.backgroundColor = "#d53f8c";
// });

// Ejercicio Tres

// const valor1 = document.querySelector("#valor1");
// const valor2 = document.querySelector("#valor2");
// const btnSumar = document.querySelector("#btn-sumar");
// const btnRestar = document.querySelector("#btn-restar");
// const regExpNumeros = /^([0-9])*$/;

// btnSumar.addEventListener("click", () => {
//   if (regExpNumeros.test(valor1.value, valor2.value)) {
//     return console.log(
//       "La suma es: " + (parseInt(valor1.value) + parseInt(valor2.value))
//     );
//   } else {
//     return console.log("Ingresa un numero valido");
//   }
// });

// btnRestar.addEventListener("click", () => {
//   if (regExpNumeros.test(valor1.value, valor2.value)) {
//     if (parseInt(valor1.value) - parseInt(valor2.value) > 0) {
//       return console.log(
//         "La resta es: " + (parseInt(valor1.value) - parseInt(valor2.value))
//       );
//     } else {
//       return console.log("La resta es: 0");
//     }
//   } else {
//     return console.log("Ingresa un numero valido");
//   }
// });
