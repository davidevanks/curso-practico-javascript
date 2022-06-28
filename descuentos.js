// const precioOriginal=100;
// const descuento=15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100-descuento;
    const precioConDescuento= (precio* porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const price= document.getElementById("InputPrice").value;
    const cupoName= document.getElementById("InputDiscount").value;
   let discount=0;
    switch (cupoName) {
        case "KennethCupon":
            discount=10;
          break;
        case "AndreaCupon":
            discount=30;
          break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }

    const precioConDescuento=calcularPrecioConDescuento(price,discount);

   

    const resultPrince=document.getElementById("ResultPriceP");
    resultPrince.innerText=`El descuento de ${discount}% da un valor total a pagar:${precioConDescuento}` ;
}



