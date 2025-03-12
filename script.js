document.addEventListener("DOMContentLoaded", function() {

    const menuItems = document.querySelectorAll("nav ul li a");
    
    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(item.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const pricingCards = document.querySelectorAll(".pricing-card");
    
    pricingCards.forEach(card => {
        card.addEventListener("mouseover", function() {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s ease-in-out";
        });
        card.addEventListener("mouseout", function() {
            card.style.transform = "scale(1)";
        });
    });
});
// read more
function toggleText() {
    const moreText = document.querySelector(".more-text");
    const readMoreBtn = document.querySelector(".read-more");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        readMoreBtn.textContent = "Скрыть";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Читать больше";
    }
}


// carusel

let currentIndex = 0;

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dots span');
    const total = items.length;

    if (currentIndex >= total) currentIndex = 0;
    if (currentIndex < 0) currentIndex = total - 1;

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function prevSlide() {
    currentIndex--;
    updateCarousel();
}

function nextSlide() {
    currentIndex++;
    updateCarousel();
}

// Инициализация точек (dots)
document.addEventListener('DOMContentLoaded', () => {
    const total = document.querySelectorAll('.carousel-item').length;
    const dotsContainer = document.querySelector('.carousel-dots');

    for (let i = 0; i < total; i++) {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
    
    updateCarousel();
});


// faq

function toggleFAQ(index) {
    const items = document.querySelectorAll('.faq-item');
    const answers = document.querySelectorAll('.faq-answer');

    items.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('active');
            answers[i].classList.toggle('active');
        } else {
            item.classList.remove('active');
            answers[i].classList.remove('active');
        }
    });
}