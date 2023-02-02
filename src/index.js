
import validator from './validator.js';
const input = document.getElementById("cardnumber");
input.addEventListener("input", function() {
  if (!/^\d+$/.test(this.value)) {
    // El valor ingresado no es un número, se elimina
    this.value = this.value.replace(/[^\d]+/g, "");
    alert("solo puedes ingresar numeros");
  }
});

const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  const input = document.getElementById("cardnumber");
  if (input.value.trim().length === 0) {
    // El campo está vacío, se detiene el envío del formulario
    event.preventDefault();
    alert("El campo no puede estar vacío");
  }
  /*else { 
    if (input.value.trim().length < 14 ) {
      event.preventDefault();
      alert("El campo no puede tener menos de 14 caracteres");
    }*/
  else {
    const valid = validator.isValid(document.getElementById("cardnumber").value);
    const maskify=validator.maskify(document.getElementById("cardnumber").value);
    event.preventDefault();
    if (valid){  
      // Show success in div#result
      alert("Genial, el número de  tarjeta insertada  es correcta " )
      document.getElementById("result").style.display="block";
      document.getElementById("maskify").style.display="block";
      document.getElementById("result").innerHTML = 'Tarjeta valida: ';
      document.getElementById("maskify").innerHTML = 'Número enmascarado: '+ maskify;
    }
    else {
      // Show error message in div#result
      alert( "Lo sentimos,intente con otro número de tarjeta" );
      document.getElementById("result").style.display="block";
      document.getElementById("maskify").style.display="block";
      document.getElementById("result").innerHTML = 'Tarjeta invalida: ';
      document.getElementById("maskify").innerHTML = 'Número enmascarado: '+ maskify;
    }
  }
  //}
});

 
