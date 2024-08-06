// Ancoras
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

//Modal
const abrirBotaoModal = document.querySelector(".open-modal");
const fecharBotaoModal = document.querySelector(".b-fecharmodal");
const modal = document.querySelector("#modal");
const esconder = document.querySelector("#div-fademodal");

const alternarModal = () => {
    [modal, esconder].forEach((el) => el.classList.toggle("esconder"));
};

[abrirBotaoModal, fecharBotaoModal, esconder].forEach((el) => {
    el.addEventListener("click", () => alternarModal());
});