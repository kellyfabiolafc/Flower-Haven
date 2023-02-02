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
    let SumaValoresdePocisionesPares=0;
    let SumaValoresdePocisionesImPares=0;
    let i;
    for (i=0;i<amountOfTours;i++){ 
      const valordeCarater = parseInt( reverseCreditCardNumber.charAt(i)) ; 
      if (i%2===0){
        SumaValoresdePocisionesPares=SumaValoresdePocisionesPares+valordeCarater;
      }
      if (i%2===1){
        let ValInpar;
        ValInpar=valordeCarater*2;
        if (ValInpar>9){//ValInpar = parseInt( (ValInpar.toString().charAt(0)))+ parseInt( (ValInpar.toString().charAt(1)));
          ValInpar = ValInpar-9;
        }
        SumaValoresdePocisionesImPares=SumaValoresdePocisionesImPares+ValInpar;
      }
    }
    const SumaTotal=SumaValoresdePocisionesImPares+SumaValoresdePocisionesPares;
    const ValEnds= SumaTotal%10;
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

 
