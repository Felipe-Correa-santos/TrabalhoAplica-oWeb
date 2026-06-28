// Validador de Formulário de Contato
// Script para validar e processar o envio do formulário de contato

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContato');
    const mensagem = document.getElementById('mensagemSucesso');

    // Função para validar os campos do formulário
    function validarFormulario() {
        // Obtém os valores dos campos e remove espaços em branco
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const textoMensagem = document.getElementById('mensagem').value.trim();

        // Validação do nome (mínimo 2 caracteres)
        const nomeValido = nome.length >= 2;
        // Validação do email usando regex
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        // Validação da mensagem (mínimo 10 caracteres)
        const mensagemValida = textoMensagem.length >= 10;

        // Retorna true apenas se todos os campos são válidos
        return nomeValido && emailValido && mensagemValida;
    }

    // Listener para o envio do formulário
    if (form) {
        form.addEventListener('submit', function (event) {
            // Previne o comportamento padrão de envio
            event.preventDefault();

            // Valida o formulário
            const formularioValido = validarFormulario();

            // Se não for válido, exibe mensagem de erro
            if (!formularioValido) {
                mensagem.textContent = 'Por favor, preencha todos os campos corretamente.';
                mensagem.style.display = 'block';
                mensagem.style.color = 'red';
                return;
            }

            // Se válido, exibe mensagem de sucesso
            mensagem.textContent = 'Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.';
            mensagem.style.display = 'block';
            mensagem.style.color = 'green';
        });
    }
});
