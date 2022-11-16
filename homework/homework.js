"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let string1 = "", string2 = 0, pos = 0;

  string1 = num.toString();
  pos = 0;
  for ( let i = num.length - 1 ; i >= 0 ; i--) {
    string2 = string2 + (string1.charAt(i) * (2**pos));
    pos = pos + 1;
  }
  return string2;
}


function DecimalABinario(num) {
  // tu codigo aca
  let resto = 0 , div = 0 , resultado =[];
  div = num;
  for ( let i = 0 ; i < num; i++ ) {
    resto = div%2;
    resultado.unshift(resto);
    div = Math.trunc(div/2);
    if (div === 0){
      break;
    }
  }
  return resultado.join("");

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
