obtemPacientes = (form) => {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

validaPaciente = (paciente) => {
    let erros = [];

    (paciente.nome.length == 0) ? erros.push("O nome não pode ser em branco") : "";
    (paciente.gordura.length == 0) ? erros.push("A gordura não pode ser em branco") : "";
    (paciente.peso.length == 0) ? erros.push("O peso não pode ser em branco") : "";
    (paciente.altura.length == 0) ? erros.push("A altura não pode ser em branco") : "";

    !validaPeso(paciente.peso) ? erros.push("Peso é inválido") : "";
    !validaAltura(paciente.altura) ? erros.push("Altura é inválida") : "";

    return erros;
}

exibeMensagemErro = (erros) => {

    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""

    erros.forEach((erro) => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

montaTd = (classe, dado) => {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

montaTr = (paciente) => {
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // const nomeTd = montaTd("info-nome",paciente.nome);
    // const pesoTd = montaTd("info-peso",paciente.peso);
    // const alturaTd = montaTd("info-altura",paciente.altura);
    // const gorduraTd = montaTd("info-gordura",paciente.gordura);
    // const imcTd = montaTd("info-imc",paciente.imc);

    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(montaTd("info-nome", paciente.nome));
    pacienteTr.appendChild(montaTd("info-peso", paciente.peso));
    pacienteTr.appendChild(montaTd("info-altura", paciente.altura));
    pacienteTr.appendChild(montaTd("info-gordura", paciente.gordura));
    pacienteTr.appendChild(montaTd("info-imc", paciente.imc));

    return pacienteTr;
}

//Adicionar pacinete na tabela
document.querySelector("#adicionar-paciente").addEventListener("click", (event) => {
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");

    const paciente = obtemPacientes(form);

    // const nomeTd = document.createElement("td");
    // const pesoTd = document.createElement("td");
    // const alturaTd = document.createElement("td");
    // const gorduraTd = document.createElement("td");
    // const imcTd = document.createElement("td");

    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

    const pacienteTr = montaTr(paciente);

    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);

    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""
    
    form.reset();
});