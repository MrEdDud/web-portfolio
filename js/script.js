function revealText() {
    let additionalText = document.getElementById("additionalText");
    let aboutImage = document.getElementById("aboutImage");
    let titleButton = document.getElementById("titleButton");
    
    if (additionalText.style.display === "none") {
        additionalText.style.display = "block";
        aboutImage.style.display = "flex";
        additionalText.innerHTML = "I am an enthusiastic and goal-driven student currently in my second year of BSc Computer Science at Middlesex University. I have a passion for software development and embedded systems, as seen in my projects where I have used languages and frameworks such as Python, JavaScript, Java, Flask and Node.js to create websites and robot vehicles.";
        titleButton.innerHTML = "↑";
    } else {
        additionalText.style.display = "none";
        aboutImage.style.display = "none";
        additionalText.innerHTML = "";
        titleButton.innerHTML = "↓";
    }
}

function scrollCarousel(direction) {
    const carousel = document.getElementById("skillsCarousel");

    const scrollAmount = carousel.querySelector(".card").offsetWidth + 50;

    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

function openModal(card) {
    const modal = document.getElementById("modal");

    modal.innerHTML = '<button class="modal-close" onclick="closeModal()">&times;</button>';

    const clone = card.querySelector(".modal-content").cloneNode(true);
    clone.style.display = "block";

    modal.appendChild(clone);

    document.getElementById("modal-backdrop").style.display = "flex";
    document.body.classList.add("modal-open");
}

function closeModal() {
    const modal = document.getElementById("modal");

    modal.innerHTML = '<button class="modal-close" onclick="closeModal()">&times;</button>';

    document.getElementById("modal-backdrop").style.display = "none";
    document.body.classList.remove("modal-open");
}

document.getElementById("modal-backdrop").addEventListener("click", e => {
    if (e.target.id === "modal-backdrop") closeModal();
});