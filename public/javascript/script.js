function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.getElementById("loadModels").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:3000/api/cars");
        const cars = await response.json();
        displayCars(cars);
    } catch (error) {
        console.error("Error fetching car data:", error);
    }
});
function displayCars(cars) {
    const container = document.getElementById("modelsContainer");
    container.innerHTML = ""; // Clear existing content

    cars.forEach(car => {
        const carCard = document.createElement("article");
        carCard.classList.add("model-card");

        carCard.innerHTML = `
            <img class="model-image" src="${car.image}" alt="${car.name}">
            <div class="model-specs">
                <div class="model-name">${car.name}</div>
                <div class="model-price">From ${car.price}</div>
                <div class="spec-item"><span class="spec-label">Power:</span> <span class="spec-value">${car.power}</span></div>
                <div class="spec-item"><span class="spec-label">Acceleration (0-100 km/h):</span> <span class="spec-value">${car.acceleration}</span></div>
                <div class="spec-item"><span class="spec-label">Top Speed:</span> <span class="spec-value">${car.top_speed}</span></div>
            </div>
        `;

        container.appendChild(carCard);
    });
}
