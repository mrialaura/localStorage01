//função para salvar o formulário
function salvarFormulario() {
    const dados = {
        nome: document.getElementById('nome').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        cpf: document.getElementById('cpf').value,
        areaCurso: document.getElementById('areaCurso').value,
    };

    localStorage.setItem('dadosFormulario', JSON.stringify(dados));
    alert('Formulário salvo com sucesso');

}

//recuperar dados do formulario
function recuperarFormulario() {
    const dadosSalvos = localStorage.getItem('dadosFormulario')

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);

        document.getElementById('nome').value = dados.nome;
        document.getElementById('dataNascimento').value = dados.dataNascimento;
        document.getElementById('email').value = dados.email;
        document.getElementById('celular').value = dados.celular;
        document.getElementById('cpf').value = dados.cpf;
        document.getElementById('areaCurso').value = dados.areaCurso;
    }
}

//botao de limpar formulario depois do envio
function enviarFormulario() {
    localStorage.clear();
    alert('Todos os dados foram limpos com sucesso');
}

//botao de limpar formulario
function limparFormulario() {
    localStorage.clear();
    alert("Todos os dados foram limpos com sucesso");
}