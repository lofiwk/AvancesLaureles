// Sample property data
const properties = [
    { name: "Parcela con Vista al Valle", price: "\$150,000,000", size: "5,000 m²", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Casa de Campo Restaurada", price: "\$180,000,000", size: "200 m² en 2,000 m² de terreno", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Terreno Agrícola Fértil", price: "\$100,000,000", size: "10,000 m²", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
];

// Dynamically add properties to the page
function loadProperties() {
    const propertyList = document.getElementById('property-list');
    properties.forEach(property => {
        const propertyElement = document.createElement('div');
        propertyElement.className = 'property';
        propertyElement.innerHTML = `
            <img src="${property.image}" alt="${property.name}">
            <div class="property-info">
                <h3>${property.name}</h3>
                <p>Precio: ${property.price}</p>
                <p>Tamaño: ${property.size}</p>
            </div>
        `;
        propertyList.appendChild(propertyElement);
    });
}

// Generate a random captcha code
function generateCaptcha() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
}

// Display the captcha
function displayCaptcha() {
    const captchaContainer = document.getElementById('captcha-container');
    captchaContainer.textContent = generateCaptcha();
}

// Handle contact form submission
function handleContactFormSubmission(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log("Contact form submitted:", { name, email, phone, message });
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    e.target.reset();
}

// Handle Zoom meeting booking
function handleZoomBooking(e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('zoomEmail').value;
    const phone = document.getElementById('zoomPhone').value;
    const captchaInput = document.getElementById('captcha-input').value;
    const captchaContainer = document.getElementById('captcha-container');

    if (captchaInput.toUpperCase() === captchaContainer.textContent) {
        console.log("Zoom meeting booked:", { fullName, email, phone });
        alert(`Gracias, ${fullName}. Tu reunión por Zoom ha sido agendada. Te enviaremos los detalles por correo electrónico.`);
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
        zoomForm.reset();
        displayCaptcha();
    } else {
        alert("El código captcha es incorrecto. Por favor, inténtalo de nuevo.");
        displayCaptcha();
    }
}

// Modal functionality
const modal = document.getElementById("zoom-modal");
const btn = document.getElementById("open-zoom-modal");
const heroCta = document.getElementById("hero-cta");
const span = document.getElementsByClassName("close")[0];
const zoomForm = document.getElementById("zoom-form");
const contactForm = document.getElementById("contact-form");

function openModal() {
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10);
    displayCaptcha();
}

function closeModal() {
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

btn.onclick = openModal;
heroCta.onclick = openModal;

span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProperties();
    zoomForm.addEventListener('submit', handleZoomBooking);
    contactForm.addEventListener('submit', handleContactFormSubmission);
});