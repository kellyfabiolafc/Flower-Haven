import validator from './validator.js';
//Este código  utiliza el DOM (Document Object Model) para manipular elementos HTML.
const input = document.getElementById("cardnumber");
input.addEventListener("input", function() {
  if (!/^\d+$/.test(this.value)) {
    this.value = this.value.replace(/[^\d]+/g, "");
    alert("Solo puedes ingresar numeros");
  }
});

const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {//La función comprueba si el campo "cardnumber" está vacío.
  const input = document.getElementById("cardnumber");
  if (input.value.trim().length === 0) {
    // El campo está vacío, se detiene el envío del formulario
    event.preventDefault();
    openAlert("El campo número de tarjeta no puede estar vacío");/*Si está vacío, se detiene el envío del formulario y
    se muestra una alerta al usuario indicando que el campo no puede estar vacío.*/
  }
  else {
    const valid = validator.isValid(document.getElementById("cardnumber").value);
    const maskify=validator.maskify(document.getElementById("cardnumber").value);
    const brand= validator.getBrand(document.getElementById("cardnumber").value);
    event.preventDefault();
    if (valid){
      const validacion = "¡Felicitaciones! Tu suscripción se ha realizado exitosamente. Disfruta de todos los beneficios de nuestra membresía especial para clientes frecuentes.";
      const franquicia = "Franquicia: " + brand;
      const enmascaramiento  = maskify;
      openModal(validacion,franquicia,enmascaramiento);
      form.reset();
    }
    else {
      // Show error message in div#result
      const validacion = "Disculpa, pero parece que el número de tarjeta que has ingresado no es válido. Por favor, verifica nuevamente los detalles de tu tarjeta e intenta nuevamente.";
      const franquicia = "Franquicia: " + brand;
      const enmascaramiento  = maskify;
      openModal(validacion,franquicia,enmascaramiento);
      form.reset();
    }
  }
  //}
});

// Obtén todos los enlaces del menú
const menuLinks = document.querySelectorAll('nav ul li a');

// Recorre los enlaces y agrega el evento click
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Elimina la clase activa de todos los enlaces
    menuLinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Agrega la clase activa al enlace actual
    event.target.classList.add('active');
  });
});

//modal

const openModal = (message1, message2, message3) => {
  const modalContent = document.querySelector('.modal-content');
  // Crear los párrafos con los mensajes
  const paragraphs = document.createElement('div');
  paragraphs.innerHTML = `<p>${message1}</p><p>${message2}</p><p>${message3}</p>`;

  // Agregar los párrafos al elemento .modal-content
  modalContent.appendChild(paragraphs);

  // Mostrar el modal
  document.querySelector('.modal').style.display = 'block';
};

const openAlert= (message) => {
  const modalContent = document.querySelector('.modal-content');
  // Crear los párrafos con los mensajes
  const paragraphs = document.createElement('div');
  paragraphs.innerHTML = `<p>${message}</p>`;

  // Agregar los párrafos al elemento .modal-content
  modalContent.appendChild(paragraphs);

  // Mostrar el modal
  document.querySelector('.modal').style.display = 'block';
}

document.querySelector('.close').addEventListener('click', (e) => {
  e.preventDefault();
  const modalContent = document.querySelector('.modal-content');

  // Eliminar los párrafos agregados dinámicamente
  modalContent.innerHTML = '';
  document.querySelector('.modal').style.display = 'none';
});
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("show");
});


window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollTop = window.scrollY;

  // Ajusta la altura (en píxeles) a partir de la cual se cambia el color de fondo
  const triggerHeight = 100;

  if (scrollTop > triggerHeight) {
    header.style.backgroundColor = "rgba(51, 51, 51, 0.8)"; // Cambia el color de fondo a un filtro
  } else {
    // header.style.backgroundColor = "transparent"; // Vuelve a un fondo transparente
    header.style.backgroundColor = "transparent"; // Vuelve a un fondo transparente
  }
});
