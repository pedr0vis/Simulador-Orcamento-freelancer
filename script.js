const botoesAdicionar = document.querySelectorAll(`.adicionar`);

const listaContrata = document.getElementById(`lista-contrata`);

const totalElemento = document.getElementById(`total`);

let total = 0;

botoesAdicionar.forEach((botao) => {

    botao.addEventListener("click", () => {

        const services = botao.parentElement;

        const nome = services.querySelector("h3").textContent;

        const preco = parseFloat(services.querySelector(`.preco`).textContent.replace("R$", ""));

        const itemContrata = document.createElement(`li`);
        itemContrata.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        listaContrata.appendChild(itemContrata);

        total += preco;

        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

    });

});

const botaoFinalizarContrata = document.getElementById("finalizar-contrata");

botaoFinalizarContrata.addEventListener("click", () => {

    alert("Solicitação de serviço finalizada " + totalElemento.textContent);
    listaContrata.innerHTML = "";
    total = 0;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

});