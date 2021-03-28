/* Rocketseat: LaunchBase Bootcamp
   Challenge 03-03: Course Description Page */

const cards = document.querySelectorAll(".card");

for (let card of cards) {
    card.addEventListener("click", function() {
        const postId = card.getAttribute("id");

        window.location.href = `/content/${postId}/`;
    });
}
