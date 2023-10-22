document.addEventListener('DOMContentLoaded', function() {
    // URL da página para carregar como padrão
    const defaultContentPath = 'home/emalta.html';

    // Carregar o conteúdo padrão
    loadExternalContent(defaultContentPath)
        .then((content) => {
            insertContentIntoMain(content);
        });

    const asideElement = document.querySelector('aside');

    asideElement.addEventListener('click', function (event) {
        if (event.target.classList.contains('content-button')) {
            const contentPath = event.target.getAttribute('data-content-path');
            loadExternalContent(contentPath)
                .then((content) => {
                    insertContentIntoMain(content);
                });
        }
    });
});

function loadExternalContent(url) {
    return fetch(url)
        .then((response) => response.text())
        .catch((error) => {
            console.error('Erro ao carregar o conteúdo:', error);
            return '';
        });
}

function insertContentIntoMain(content) {
    const mainElement = document.getElementById('content');
    mainElement.innerHTML = content;
}


