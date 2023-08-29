function calcula_imc(){

    event.preventDefault(); //Evita o encio do formulário

    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = peso / (altura*altura);
    var resultado;

    if(calculo<18.5){
       resultado = "Você está abaixo com esse indice: " + calculo;
    }
    else if(calculo>=18.5 && calculo<24.9){
        resultado = "Você está normal com esse indice: " + calculo;
        }  
    else if(calculo>=25 && calculo<29.9){
        resultado = "Você está com sobre peso esse indice: " + calculo;
        }   
    else if(calculo>=30 && calculo<39.9){
        resultado = "Você está com obesidade esse indice: " + calculo;
        }      
    else if(calculo>=40){
        resultado = "Você está com obesidade grave esse indice: " + calculo;
        }
    
    document.getElementById('result').innerHTML = resutado;   
}