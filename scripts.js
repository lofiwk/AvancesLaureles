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

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log("Form submitted:", { name, email, phone, message });
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    e.target.reset();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProperties();
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmission);
});