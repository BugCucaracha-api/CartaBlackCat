const envelopeContainer =
    document.getElementById("envelopeContainer");

const envelope =
    document.getElementById("envelope");

const waxSeal =
    document.getElementById("waxSeal");

const letterContainer =
    document.getElementById("letterContainer");

const closeLetter =
    document.getElementById("closeLetter");

const flap =
    document.querySelector(".flap");

const letterPreview =
    document.querySelector(".letter-preview");


/* =========================
   ABRIR CARTA
========================= */

waxSeal.addEventListener("click", function (event) {

    event.stopPropagation();

    // Romper/desaparecer el sello
    waxSeal.style.transform =
        "translate(-50%, -50%) scale(1.5)";

    waxSeal.style.opacity = "0";

    // Abrir la solapa
    setTimeout(() => {
        flap.style.transform = "rotateX(180deg)";
    }, 200);

    // Sacar ligeramente la carta
    setTimeout(() => {
        letterPreview.style.transform =
            "translateY(-90px)";
    }, 500);

    // Ocultar el sobre
    setTimeout(() => {
        envelopeContainer.classList.add("hidden");
    }, 900);

    // Mostrar carta
    setTimeout(() => {
        letterContainer.classList.add("visible");
    }, 1100);

});


/* =========================
   CERRAR CARTA
========================= */

closeLetter.addEventListener("click", function () {

    // Ocultar carta
    letterContainer.classList.remove("visible");

    // Después de que desaparezca,
    // volver a mostrar el sobre
    setTimeout(() => {

        envelopeContainer.classList.remove("hidden");

        // Volver a colocar la carta dentro
        letterPreview.style.transform =
            "translateY(0)";

        // Cerrar la solapa
        flap.style.transform =
            "rotateX(0deg)";

        // Restaurar el sello
        waxSeal.style.transform =
            "translate(-50%, -50%) scale(1)";

        waxSeal.style.opacity = "1";

    }, 600);

});