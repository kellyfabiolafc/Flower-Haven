const validator = {
  isValid: (creditCardNumber) => {
    function invertirCadena(creditCardNumber) {
      if (creditCardNumber === "")
        return "";
      else
        return invertirCadena(creditCardNumber.substr(1)) + creditCardNumber.charAt(0);
    }
    const reverseCreditCardNumber=invertirCadena(creditCardNumber);
    const amountOfTours=creditCardNumber.length;
    let SumOffOddPositions=0;
    let SumOffEvenPositions=0;
    let i;
    for (i=0;i<amountOfTours;i++){ 
      const CharacterValue = parseInt( reverseCreditCardNumber.charAt(i)) ; 
      if (i%2===0){
        SumOffOddPositions=SumOffOddPositions+CharacterValue;
      }
      if (i%2===1){
        let OddValue;
        OddValue=CharacterValue*2;
        if (OddValue>9){//OddValue = parseInt( (OddValue.toString().charAt(0)))+ parseInt( (OddValue.toString().charAt(1)));
          OddValue = OddValue-9;
        }
        SumOffEvenPositions=SumOffEvenPositions+OddValue;
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
  }
}
export default validator;

 
