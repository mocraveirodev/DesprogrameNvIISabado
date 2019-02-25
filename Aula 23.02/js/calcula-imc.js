//Alterando nosso titulo
// document.querySelector("#titulo").textContent = "Carla Crude";

//Buscando Pacientes
// let paciente = document.querySelector("#primeiro-paciente");
const pacientes = document.querySelectorAll(".paciente");

calculaIMC = (peso, altura) => {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

validaPeso = (peso) => {
    if (peso >= 0 && peso <= 400) {
        return true;
    }else{
        return false;
    }
}

validaAltura = (altura) => {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    }else{
        return false;
    }
}

// console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;

    let imcTd = paciente.querySelector(".info-imc");

    //Validando dados
    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    // if (peso <= 0 || peso >= 400) {
    //     imcTd.textContent = "Peso inválido!";
    //     paciente.classList.add("paciente-invalido");
    //     pesoEhValido = false;
    // }

    // if (altura <= 0 || altura >= 3.00) {
    //     imcTd.textContent = "Altura inválido!";
    //     paciente.classList.add("paciente-invalido");
    //     alturaEhValida = false;
    // }

    if (pesoEhValido && alturaEhValida) {
        // let imc = peso / (altura * altura);
        imcTd.textContent = calculaIMC(peso,altura);
    } else {
        imcTd.textContent = "Peso e/ou Altura inválidos!";
        paciente.classList.add("paciente-invalido");
    }
}


//Calculando IMC
// let imc = peso / (altura * altura);
// imcTd.textContent = imc;



