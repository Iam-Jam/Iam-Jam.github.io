// Add your JavaScript code here

// Function to fetch property listings from an API
async function fetchPropertyListings() {
    try {
        const response = await fetch('https://api.example.com/property-listings');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching property listings:', error);
    }
}

// Function to display property listings on the webpage
function displayPropertyListings(listings) {
    const propertyListingsSection = document.getElementById('property-listings');

    // Clear previous listings
    propertyListingsSection.innerHTML = '';

    // Loop through listings and create HTML elements to display each listing
    listings.forEach(listing => {
        const listingElement = document.createElement('div');
        listingElement.classList.add('listing', 'col-md-6', 'col-lg-4');

        const imageElement = document.createElement('img');
        imageElement.src = listing.image;
        imageElement.alt = listing.title;
        imageElement.classList.add('img-fluid', 'mb-3');

        const titleElement = document.createElement('h2');
        titleElement.textContent = listing.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = listing.description;

        // Add more details like price, location, etc. as needed

        listingElement.appendChild(imageElement);
        listingElement.appendChild(titleElement);
        listingElement.appendChild(descriptionElement);

        propertyListingsSection.appendChild(listingElement);
    });
}

// When the page loads, fetch property listings and display them
window.onload = async () => {
    const propertyListings = await fetchPropertyListings();
    displayPropertyListings(propertyListings);
};
