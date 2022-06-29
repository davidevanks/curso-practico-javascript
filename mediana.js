function calcularMediana(lista1){
    let result;
    lista1= lista1.sort(function(a, b){return a - b});
   
    const mitadLista1= lista1.length/2;

    function esPar(numerito)
    {
            if(numerito % 2===0)
            {
               return true;
            }
            else 
            {
               return false;
            }
    }
    function calcularMediaritmetica(lista){
       
        
        const sumaLista=lista.reduce(
                    function(valorAcumulado=0,nuevoElemnto){
                      return  valorAcumulado+nuevoElemnto;
                    }
    
        );
    
        const promedioLista=sumaLista/lista.length;
    
        return promedioLista;
    }
    
    
    let mediana;
    
    if(esPar(lista1.length))
    {
      const elemento1=lista1[parseInt(mitadLista1)-1];
      const elemento2=lista1[parseInt(mitadLista1)];
    
    
      const promedio=calcularMediaritmetica([elemento1,elemento2]);
    
      result=promedio;
    
    }
    else{
       mediana= lista1[parseInt(mitadLista1)];
    
       result=mediana;
    }
    
   return result; 
}
