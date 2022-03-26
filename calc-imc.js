function calcImc(){
    const nome = window.document.getElementById('nomeDoUsuario');
    const peso = window.document.getElementById('peso');
    const alturaEmMetro =  window.document.getElementById('altura');
    const fraseNaTela = window.document.getElementById('res');

    const identificador = nome.value ;
    const pesoDoUser = peso.value ;
    const altura = alturaEmMetro.value ;
    const imc = pesoDoUser / (altura * altura) ;
    const resultado = fraseNaTela;

    if (identificador == '' || pesoDoUser <= 0 || altura <= 0) {
        window.alert(`Está faltando alguma informação. Verifica aí, valeu?!`) ;

    } else if (imc <= 18.5) {
        resultado.innerHTML = `Olá, ${identificador}! <br> Sua altura é de ${altura} cm e pesa ${pesoDoUser} kg. <br> Logo, seu IMC é de ${imc.toFixed(1)}. <br> Você está abaixo do peso.` ;
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `Olá, ${identificador}! <br> Sua altura é de ${altura} cm e pesa ${pesoDoUser} kg. <br> Logo, seu IMC é de ${imc.toFixed(1)}. <br> Você está na faixa de peso normal.` ;

    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `Olá, ${identificador}! <br> Sua altura é de ${altura} cm e pesa ${pesoDoUser} kg. <br> Logo, seu IMC é de ${imc.toFixed(1)}. <br> Você está na faixa de sobrepeso.` ;
        
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `Olá, ${identificador}! <br> Sua altura é de ${altura} cm e pesa ${pesoDoUser} kg. <br> Logo, seu IMC é de ${imc.toFixed(1)}. <br> Você está na faixa de Obesidade Grau I.` ;

    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `Olá, ${identificador}! <br> Sua altura é de ${altura} cm e pesa ${pesoDoUser} kg. <br> Logo, seu IMC é de ${imc.toFixed(1)}. <br> Você está na faixa de Obesidade Grau II.` ;

    } else if (imc >= 40) {
        resultado.innerHTML = `Olá, ${identificador}! <br> Sua altura é de ${altura} cm e pesa ${pesoDoUser} kg. <br> Logo, seu IMC é de ${imc.toFixed(1)}. <br> Você está na faixa de Obesidade Grau III ou Mórbida.` ;
    } else {
        resultado.innerHTML = `Que tal começar a caminhada hoje? Meditação? Academia? Cuida do corpo, Flw?! Tamo, junto.`
    }
    
    
              
}
