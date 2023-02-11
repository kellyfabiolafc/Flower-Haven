import validator from './validator.js';
//Este código  utiliza el DOM (Document Object Model) para manipular elementos HTML.

const input = document.getElementById("cardnumber");
input.addEventListener("input", function() {
  if (!/^\d+$/.test(this.value)) {/*
    La función verifica si el valor actual del elemento (accesible a través de this.value) cumple con el patrón de un 
    número. Se hace esto utilizando una expresión regular y la función test . Si el valor no es un número 
    (es decir, la función test devuelve false), .*/
    
    this.value = this.value.replace(/[^\d]+/g, ""); /* El valor ingresado no es un número, se eliminan todos los caracteres que no sean 
    dígitos utilizando la 
    función replace y una expresión regular*/
    alert("solo puedes ingresar numeros");
  }
});



const form = document.getElementById("myForm");/*
El segundo fragmento de código agrega un controlador de eventos "submit" al formulario con el ID "myForm". Cada vez que se envía el 
formulario, se ejecuta la función anónima asociada al controlador de eventos. */
form.addEventListener("submit", function(event) {//La función comprueba si el campo "cardnumber" está vacío. 
  const input = document.getElementById("cardnumber");
  if (input.value.trim().length === 0) {
    // El campo está vacío, se detiene el envío del formulario
    event.preventDefault();
    alert("El campo número de tarjeta no puede estar vacío");/*Si está vacío, se detiene el envío del formulario y 
    se muestra una alerta al usuario indicando que el campo no puede estar vacío.*/
  }
  else { /*se valida el número de tarjeta con una función llamada "validator.isValid" y se muestra un mensaje en la página HTML indicando si 
  el número de tarjeta es válido o no y la versión de la tarjeta con loscaracteres después de los cuatro últimos reemplazados con asteriscos
   (usando la función "validator.maskify").*/
    const valid = validator.isValid(document.getElementById("cardnumber").value);
    const maskify=validator.maskify(document.getElementById("cardnumber").value);
    event.preventDefault();
    if (valid){  
      // Show success in div#result
      alert("Genial, el número de  tarjeta insertada  es correcta " )
      document.getElementById("result").style.display="block";
      document.getElementById("maskify").style.display="block";
      document.getElementById("result").innerHTML = 'Tarjeta valida: ';
      document.getElementById("maskify").innerHTML = maskify;
    }
    else {
      // Show error message in div#result
      alert( "Lo sentimos,intente con otro número de tarjeta" );
      document.getElementById("result").style.display="block";
      document.getElementById("maskify").style.display="block";
      document.getElementById("result").innerHTML = 'Tarjeta invalida: ';
      document.getElementById("maskify").innerHTML = maskify;
    }
  }
  //}
});
