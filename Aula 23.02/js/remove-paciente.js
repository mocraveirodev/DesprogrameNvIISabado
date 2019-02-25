// const pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach((paciente) => {
//     paciente.addEventListener("dblclick",function(){
//         this.remove();
//     });
// });

document.querySelector("#tabela-pacientes").addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
        event.target.parentNode.remove();        
    },500);
});
