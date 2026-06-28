// Gerenciador de Temas (Claro/Escuro)
// Este script alternancia entre modo claro e escuro, salvando a preferência no localStorage

document.addEventListener('DOMContentLoaded', function () {
    const linkTema = document.getElementById('themeStylesheet');
    const botaoTema = document.getElementById('botaoTema');

    // Função para aplicar o tema selecionado
    function aplicarTema(tema) {
        if (!linkTema) return;

        // Alterna o arquivo CSS entre modo claro e escuro
        linkTema.href = tema === 'dark' ? 'css/DarkMode.css' : 'css/styles.css';
        // Salva a preferência do usuário no navegador
        localStorage.setItem('tema', tema);

        // Atualiza o texto do botão conforme o tema
        if (botaoTema) {
            botaoTema.textContent = tema === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro';
        }
    }

    // Carrega o tema salvo anteriormente ou usa 'light' como padrão
    const temaSalvo = localStorage.getItem('tema') || 'light';
    aplicarTema(temaSalvo);

    // Listener para o botão de alternância de tema
    if (botaoTema) {
        botaoTema.addEventListener('click', function () {
            const temaAtual = localStorage.getItem('tema') || 'light';
            // Inverte o tema atual
            const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
            aplicarTema(novoTema);
        });
    }
});
