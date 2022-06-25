//código cuadrado
const ladoCuadrado=5;

//console.group("Cuadrados");
//console.log("El ladod el cuadrado mide: "+ladoCuadrado);

function perimetroCuadrado(lado){
        return lado*4;
};

//console.log("El perimetro del cuadrado es :" + perimetroCuadrado);

function areaCuadrado(lado){
    return lado*lado;
}

//console.log("El area del cuadrado es :" + areaCuadrado +" cm2");

console.groupEnd();
//código triangulo:
console.group("Triangulo");
// const ladoTriangulo1=6;
// const ladoTriangulo2=6;
// const baseTriangulo=4;
// const alturaTriangulo=5.5;

// console.log("La altura del triangulo es de:" +alturaTriangulo +" cm");

// console.log("Los lados del triangulo miden: "
//     +ladoTriangulo1 +" cm, "
//     +ladoTriangulo2+ " cm, "
//     +baseTriangulo+" cm "
//  );


 function perimetroTriangulo(ladoTriangulo1 , ladoTriangulo2,baseTriangulo){
  return ladoTriangulo1 + ladoTriangulo2+baseTriangulo;
 }

//  console.log("El perimetro del triangulo es :" + perimetroTriangulo+ " cm");

 function areaTriangulo(baseTriangulo,alturaTriangulo){
    return (baseTriangulo*alturaTriangulo)/2
 };

//  console.log("El area del triangulo es: "+ areaTriangulo + " cm");

 console.groupEnd();


 console.group("Círculo");
 const PI=Math.PI;
//  const radioCirculo=4;
//  console.log("El radio del circulo es: "+ radioCirculo + " cm");
  function diametroCirculo(radioCirculo){
    return radioCirculo*2;
  };

//  console.log("El diametro del circulo es: "+ diametroCirculo + " cm");


 function perimetroCirculo(radio){
    
    const diametro=diametroCirculo(radio);

    return diametro*PI;
 }



 function areaCirculo(radioCirculo,radioCirculo){
return (radioCirculo*radioCirculo)*PI;

 };


 console.groupEnd();



 //Conección on el HTML

 function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;

    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
 }

 function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;

    const area=areaCuadrado(value);
    alert(area);
}