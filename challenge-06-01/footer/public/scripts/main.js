/* Rocketseat: LaunchBase Bootcamp
   Challenge 06-01: Mini Challenges */

const cards = document.querySelectorAll(".card");

for (let card of cards) {
    card.addEventListener("click", function() {
        const postId = card.getAttribute("id");

        window.location.href = `/content/${postId}/`;
    });
}
