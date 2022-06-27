// const precioOriginal=100;
// const descuento=15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100-descuento;
    const precioConDescuento= (precio* porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const price= document.getElementById("InputPrice").value;
    const discount= document.getElementById("InputDiscount").value;

    const precioConDescuento=calcularPrecioConDescuento(price,discount);

   

    const resultPrince=document.getElementById("ResultPriceP");
    resultPrince.innerText=`El descuento de ${discount}% da un valor total a pagar:${precioConDescuento}` ;
}



