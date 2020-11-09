/* Rocketseat: LaunchBase Bootcamp
   Challenge 03-02: Nunjuck Files and Dynamic Data */

const cards = document.querySelectorAll(".card"),
    modalOverlay = document.querySelector(".modal-overlay"),
    modal = document.querySelector(".modal"),
    modalMaximize = document.querySelector(".modal-maximize"),
    modalClose = document.querySelector(".modal-close"),
    iframe = document.querySelector("iframe");

for (let card of cards) {
    card.addEventListener("click", function() {
        const postId = card.getAttribute("id");

        modalOverlay.classList.add("active");
        iframe.src = `https://blog.rocketseat.com.br/${postId}/`;
    });
}

modalMaximize.addEventListener("click", function() {
    if (modal.classList.contains("maximize")) {
        modal.classList.remove("maximize");
    } else {
        modal.classList.add("maximize");
    }
});

modalClose.addEventListener("click", function() {
    modalOverlay.classList.remove("active");

    if (modal.classList.contains("maximize")) {
        modal.classList.remove("maximize");
    }
});
