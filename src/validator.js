const validator = {
  isValid: (creditCardNumber) => {
    
    function invertirCadena(creditCardNumber) {
      if (creditCardNumber === "")//comprueba si la cadena de entrada está vacía.
        return "";//Si está vacía, devuelve una cadena vacía. 
        
      else
        return invertirCadena(creditCardNumber.substr(1)) + creditCardNumber.charAt(0);
    }
    const reverseCreditCardNumber=invertirCadena(creditCardNumber);// La variable reverseCreditCardNumber contiene la cadena invertida.
    const amountOfTours=creditCardNumber.length;
    let SumOffOddPositions=0;
    let SumOffEvenPositions=0;
    let i;
    for (i=0;i<amountOfTours;i++){ 
      const CharacterValue = parseInt( reverseCreditCardNumber.charAt(i)) ; 
      if (i%2===0){
        SumOffOddPositions +=CharacterValue; 
      }
      if (i%2===1){
        let OddValue;
        OddValue=CharacterValue*2;
        if (OddValue>9){
          OddValue -= 9;
        }
        SumOffEvenPositions +=OddValue;
      }
    }
    const TotalAmount=SumOffEvenPositions+SumOffOddPositions;
    const ValEnds= TotalAmount%10; 
    if (ValEnds===0){ 
      return true;
    } else {
      return false;
    }
  }, 
  maskify: (creditCardNumber) => {
    // Oculta todos los dígitos de la tarjeta de crédito excepto los últimos 4
    const length = creditCardNumber.length; 
    if(length<5){  
      return creditCardNumber;
    }  
    return "#".repeat(length - 4) + creditCardNumber.substring(length - 4);
  },
  getBrand: (creditCardNumber) => {//Muestra la franquisia si la cadena empieza por 
    if (creditCardNumber.startsWith("4")) {
      return "Visa";
    } else if (creditCardNumber.startsWith("5")) {
      return "Mastercard";
    } else if (creditCardNumber.startsWith("34") || creditCardNumber.startsWith("37")) {
      return "American Express";
    } else if (creditCardNumber.startsWith("6011")) {
      return "Discover";
    } else if (creditCardNumber.startsWith("35")) {
      return "JCB";
    } else {
      return "Desconocida";
    }
  }
} 
export default validator;
