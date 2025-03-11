document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Кнопка нажата!");
        });
    });

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
