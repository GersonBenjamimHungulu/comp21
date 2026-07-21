// Referências dos elementos
    var modal = document.getElementById("modalEquipa");
    var btnFooter = document.getElementById("btnEquipa"); // O botão antes do footer
    var linkNav = document.getElementById("linkEquipa");   // O novo link no <nav>
    var span = document.getElementById("fecharModal");

    // Função para abrir a modal
    function abrirJanela() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Opcional: trava o scroll do site ao abrir
    }

    // Atribuir o clique a ambos os elementos
    if (btnFooter) btnFooter.onclick = abrirJanela;
    if (linkNav) linkNav.onclick = abrirJanela;

    // Fechar a modal
    span.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

// Para o cronograma

// --- LÓGICA DA MODAL DO CRONOGRAMA ---
const modalCronograma = document.getElementById("modalCronograma");
const btnCronograma = document.getElementById("btnCronograma"); // O botão do corpo da página
const linkCronograma = document.getElementById("linkCronograma"); // O novo link da barra de navegação
const fecharModalCronograma = document.getElementById("fecharModalCronograma");

// Função padrão para abrir a modal
function abrirModalCronograma() {
    if (modalCronograma) {
        modalCronograma.style.display = "block";
        document.body.style.overflow = "hidden"; // Impede o scroll de fundo
    }
}

// 1. Abrir ao clicar no botão do meio da página
if (btnCronograma) {
    btnCronograma.addEventListener("click", abrirModalCronograma);
}

// 2. Abrir ao clicar no link do Menu Superior (Navegação)
if (linkCronograma) {
    linkCronograma.addEventListener("click", abrirModalCronograma);
}

// 3. Fechar a modal ao clicar no 'X'
if (fecharModalCronograma && modalCronograma) {
    fecharModalCronograma.addEventListener("click", function() {
        modalCronograma.style.display = "none";
        document.body.style.overflow = "auto"; // Restaura o scroll
    });
}

// 4. Fechar a modal se o utilizador clicar fora da tabela (na zona escura)
window.addEventListener("click", function(event) {
    if (event.target === modalCronograma) {
        modalCronograma.style.display = "none";
        document.body.style.overflow = "auto";
    }
});