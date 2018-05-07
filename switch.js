'use strict';
const ANIO_ACTUAL=2018

function edad(){
  let edad=prompt("escribe_una_edad"); 
  let anio=calcularAnio(edad);

  switch(edad){
  case '24':
    alert("es la edad de ramses" );
    break;
  case 30:
    alert("es la edad de Jessi"  );
    break;
  case 36:
    alert("es la edad de Liz" );
    break;
    case 32:
    alert("es la edad de Jorge" );
    break;
  case 25:
    alert( "esla edad de ricardo" );
    break;
    case 31:
    alert( "es diferente edad" );
    break;
 
}

function calcularAnio(edad){
  return(ANIO_ACTUAL-edad);
}