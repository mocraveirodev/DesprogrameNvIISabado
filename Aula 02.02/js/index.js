//Alterando nosso titulo
// document.querySelector("#titulo").textContent = "Carla Crude";

//Buscando Pacientes
// let paciente = document.querySelector("#primeiro-paciente");
const pacientes = document.querySelectorAll(".paciente");

obtemPacientes = (form) => {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value,form.altura.value)
    }

    return paciente;
}

calculaIMC = (peso, altura) => {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;

    let imcTd = paciente.querySelector(".info-imc");

    //Validando dados
    let pesoEhValido = true;
    let alturaEhValida = true;

    if (peso <= 0 || peso >= 400) {
        imcTd.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
        pesoEhValido = false;
    }

    if (altura <= 0 || altura >= 3.00) {
        imcTd.textContent = "Altura inválido!";
        paciente.classList.add("paciente-invalido");
        alturaEhValida = false;
    }

    if (pesoEhValido && alturaEhValida) {
        // let imc = peso / (altura * altura);
        imcTd.textContent = calculaIMC(peso,altura);
    } else {
        imcTd.textContent = "Peso e/ou Altura inválidos!";
        paciente.classList.add("paciente-invalido");
    }
}

//Adicionar pacinete na tabela
document.querySelector("#adicionar-paciente").addEventListener("click", (event) => {
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");

    const paciente = obtemPacientes(form);

    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    const pacienteTr = document.createElement("tr");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});


//Calculando IMC
// let imc = peso / (altura * altura);
// imcTd.textContent = imc;



