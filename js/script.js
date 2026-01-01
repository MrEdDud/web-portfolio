
const buttons = document.querySelectorAll('.left .text');
const content = document.getElementById('project-content');

let slideIndex = 0;

const slideshowData = {
    "social-media": [
        "images/social-media/img1.webp",
        "images/social-media/img2.webp",
        "images/social-media/img3.webp",
        "images/social-media/img4.webp",
        "images/social-media/img5.webp",
        "images/social-media/img6.webp",
        "images/social-media/img7.webp"
    ],
    "solitaire": [
        "images/solitaire/img1.webp",
        "images/solitaire/img2.webp",
        "images/solitaire/img3.webp",
        "images/solitaire/img4.webp"
    ],
    "robot-tank": [
        "images/robot-tank/img1.webp",
        "images/robot-tank/img2.webp",
        "images/robot-tank/img3.webp",
        "images/robot-tank/img4.webp",
    ],
    "arch-laptop": [
        "images/arch-laptop/img1.webp",
    ],
    "old-server": [
        "images/old-server/img1.webp",
        "images/old-server/img2.webp",
        "images/old-server/img3.webp"
    ],
    "tutor": [
        "images/tutor/img1.webp",
        "images/tutor/img2.png"
    ],
    "volunteer": [
        "images/volunteer/img1.webp",
    ],
    "project": [
        "images/project/img1.webp",
        "images/project/img2.webp",
        "images/project/img3.webp"
    ]
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

function initSlideshow(images) {
    const slideshow = document.getElementById("slideshow");
    const dots = document.getElementById("dots");

    slideshow.innerHTML = "";
    dots.innerHTML = "";
    slideIndex = 0;

    images.forEach((src, i) => {
        slideshow.innerHTML += `
            <div class="mySlides fade">
                <img src="${src}" style="width:100%">
            </div>
        `;
        dots.innerHTML += `<span class="dot" data-index="${i}"></span>`;
    });

    dots.querySelectorAll(".dot").forEach(dot => {
        dot.onclick = () => showSlide(+dot.dataset.index);
    });

    showSlide(0);
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

function showSlide(n) {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    if (!slides.length) return;

    slideIndex = (n + slides.length) % slides.length;

    slides.forEach(s => s.style.display = "none");
    dots.forEach(d => d.classList.remove("active"));

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

async function loadProject(projectId) {
    const res = await fetch(`md/${projectId}.md`);
    const text = await res.text();
    content.innerHTML = marked.parse(text);
}

buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
        const projectId = btn.dataset.project;

        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        await loadProject(projectId);
        await initSlideshow(slideshowData[projectId]);
    });
});

buttons[0].click();