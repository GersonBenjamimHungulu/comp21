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