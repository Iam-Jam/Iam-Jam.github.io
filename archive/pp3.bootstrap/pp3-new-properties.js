// PROPERTIES SECTION

// Search Results from Home Page
// fetch('pp3-new.json')
//   .then(response => response.json())
//   .then(data => {

//     const urlParams = new URLSearchParams(window.location.search);
//     const keyword = urlParams.get('keyword').toLowerCase();
    
//     const filteredProperties = data.filter(property => 
//         property.TransactionType.toLowerCase().includes(keyword) ||
//         property.PropertyClassification.toLowerCase().includes(keyword) ||
//         property.PropertyType.toLowerCase().includes(keyword) ||
//         property.Price.toLowerCase().includes(keyword) ||
//         property.PropertyName.toLowerCase().includes(keyword) ||
//         property.Location.toLowerCase().includes(keyword) ||
//         property.LotArea.toLowerCase().includes(keyword) ||
//         property.FloorArea.toLowerCase().includes(keyword) ||
//         property.Bedrooms.toLowerCase().includes(keyword) ||
//         property.Bathrooms.toLowerCase().includes(keyword)
//     );

//     const searchResultsContainer = document.getElementById('filtered-Properties');
//     searchResultsContainer.innerHTML = '';  

//     filteredProperties.forEach(property => {
//         const propertyHTML = `        
//         <div class='col-lg-4 col-md-6 mb-4'>
//           <div class="card property-item rounded overflow-hidden">
//             <div class="position-relative overflow-hidden">
//               <img src="${property.PropertyImage}" class="card-img-top border border-bottom-dark" style='height: 300px;'>
//               <div class="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3">${property.TransactionType}</div>
//               <div class="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.PropertyClassification} | ${property.PropertyType}</div>
//             </div>    
//             <div class="p-4 pb-0">
//               <div class="price-heart d-flex justify-content-between align-items-center">
//                 <h5 class="prop-price mb-2 fw-bold">${property.Price}</h5> 
//                 <button class="heart-btn">
//                   <i class="fa fa-regular fa-heart fa-xl" style="color: secondary"></i>
//                 </button>
//               </div>
//               <a class="d-block h5 mb-2 text-decoration-none" href="">${property.PropertyName}</a>
//               <p><i class="fa fa-map-marker-alt me-2"></i>${property.Location}</p>
//             </div>
//             <div class="d-flex border-top">
//               <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined me-2"></i>${property.LotArea}</small>
//               <small class="flex-fill text-center border-end py-2"><i class="fa fa-solid fa-house me-2"></i>${property.FloorArea}</small>
//               <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed me-2"></i>${property.Bedrooms}</small>
//               <small class="flex-fill text-center py-2"><i class="fa fa-bath me-2"></i>${property.Bathrooms}</small>   
//             </div>
//           </div>
//         </div>`;
      
//       searchResultsContainer.innerHTML += propertyHTML;
//     });
//   })
//     .catch(error => console.error('Error fetching data:', error));
  
// Search Results from Properties Page

// Transaction Buttons
// const buyBtn = document.querySelector('.buy-btn');
// const rentBtn = document.querySelector('.rent-btn');
// const sellBtn = document.querySelector('.sell-btn');

// buyBtn.addEventListener('click', () => {
//     buyBtn.classList.add('active');
//     rentBtn.classList.remove('active');
//     sellBtn.classList.remove('active');
//      initialFilterProperties();
//     const keyword = document.getElementById('search-input').value.toLowerCase();
//     filterProperties('Buy', keyword);
// });

// rentBtn.addEventListener('click', () => {
//     rentBtn.classList.add('active');
//     buyBtn.classList.remove('active');
//     sellBtn.classList.remove('active');
//      initialFilterProperties();
//     const keyword = document.getElementById('search-input').value.toLowerCase();
//     filterProperties('Rent', keyword);
// });

// sellBtn.addEventListener('click', () => {
//     sellBtn.classList.add('active');
//     buyBtn.classList.remove('active');
//     rentBtn.classList.remove('active');
//      initialFilterProperties();
//     const keyword = document.getElementById('search-input').value.toLowerCase();
//     filterProperties('Sell', keyword);
// });

// Properties - Search Button
// const searchButton = document.getElementById("prop-search-button");

// searchButton.addEventListener("click", () => {
//     const searchInput = document.getElementById('prop-search-input').value;
//     const searchUrl = `Properties.html?keyword=${searchInput}`;
//     window.open(searchUrl, '_self');
// });

// fetch('pp3-new.json')
//   .then(response => response.json())
//   .then(data => {

//     const urlParams = new URLSearchParams(window.location.search);
//     const keyword = urlParams.get('keyword').toLowerCase();
    
//     const filteredProperties = data.filter(property => 
//         property.TransactionType.toLowerCase().includes(keyword) ||
//         property.PropertyClassification.toLowerCase().includes(keyword) ||
//         property.PropertyType.toLowerCase().includes(keyword) ||
//         property.Price.toLowerCase().includes(keyword) ||
//         property.PropertyName.toLowerCase().includes(keyword) ||
//         property.Location.toLowerCase().includes(keyword) ||
//         property.LotArea.toLowerCase().includes(keyword) ||
//         property.FloorArea.toLowerCase().includes(keyword) ||
//         property.Bedrooms.toLowerCase().includes(keyword) ||
//         property.Bathrooms.toLowerCase().includes(keyword)
//     );

//     const searchResultsContainer = document.getElementById('filtered-Properties');
//     filteredProperties.forEach(property => {
//         const propertyHTML = `        
//         <div class='col-lg-4 col-md-6 mb-4'>
//           <div class="card property-item rounded overflow-hidden">
//             <div class="position-relative overflow-hidden">
//               <img src="${property.PropertyImage}" class="card-img-top border border-bottom-dark" style='height: 300px;'>
//               <div class="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3">${property.TransactionType}</div>
//               <div class="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.PropertyClassification} | ${property.PropertyType}</div>
//             </div>    
//             <div class="p-4 pb-0">
//               <div class="price-heart d-flex justify-content-between align-items-center">
//                 <h5 class="prop-price mb-2 fw-bold">${property.Price}</h5> 
//                 <button class="heart-btn">
//                   <i class="fa fa-regular fa-heart fa-xl" style="color: secondary"></i>
//                 </button>
//               </div>
//               <a class="d-block h5 mb-2 text-decoration-none" href="">${property.PropertyName}</a>
//               <p><i class="fa fa-map-marker-alt me-2"></i>${property.Location}</p>
//             </div>
//             <div class="d-flex border-top">
//               <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined me-2"></i>${property.LotArea}</small>
//               <small class="flex-fill text-center border-end py-2"><i class="fa fa-solid fa-house me-2"></i>${property.FloorArea}</small>
//               <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed me-2"></i>${property.Bedrooms}</small>
//               <small class="flex-fill text-center py-2"><i class="fa fa-bath me-2"></i>${property.Bathrooms}</small>   
//             </div>
//           </div>
//         </div>`;
      
//       searchResultsContainer.innerHTML += propertyHTML;
//     });
//   })
//     .catch(error => console.error('Error fetching data:', error));

// Display All Properties
// let Properties = [];

function _fetch() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "pp3-new.json", true);
    xhttp.send();
    xhttp.addEventListener('load', function() {
        let result = JSON.parse(xhttp.responseText);
        
        for (const property of result)
            Properties.push(property);

        _drawCards(Properties);
    });    
}

function _drawCards(mapped_Properties) {

    let PropertiesHtml = mapped_Properties.map( (property) => {

        const {PropertyNumber,TransactionType, PropertyClassification, PropertyType, Price, PropertyName, Location, LotArea, FloorArea, Bedrooms,Bathrooms,PropertyImage,TitleStatus } = property;
        return `
                <div class='col-lg-4 col-md-6 mb-4'>
                    <div class="card property-item rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <img src="${PropertyImage}" class="card-img-top border border-bottom-dark" style='height: 300px;'>
                             
                            <div class="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3"">${TransactionType}
                            </div>

                            <div class="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${PropertyClassification} | ${PropertyType}
                            </div>
                        </div>    
                        
                        <div class="p-4 pb-0">
                            <div class="price-heart d-flex justify-content-between align-items-center">
                                <h5 class="prop-price mb-2 fw-bold ">${Price}</h5> 
                                <button class="heart-btn" id="btn-add-favorite" data-pn="" type="button">
                                    <i class="fa fa-regular fa-heart fa-xl" style="color:secondary"></i>
                                </button>
                            </div>

                            <a class="d-block h5 mb-2 text-decoration-none" href="">${PropertyName}
                            </a>
                            
                            <p><i class="fa fa-map-marker-alt me-2"></i>${Location}</p>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined me-2"></i> ${LotArea}</small>
                            
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-solid fa-house me-2"></i>${FloorArea}</small>
                            
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed me-2"></i>${Bedrooms}</small>
                            
                            <small class="flex-fill text-center py-2"><i class="fa fa-bath me-2"></i>${Bathrooms}</small>   
                        </div>
                    </div>
                </div>`;
    });

    if (PropertiesHtml.length > 0)
        document.getElementById("sect-properties").innerHTML = PropertiesHtml.join('');
    else 
    document.getElementById("sect-properties").innerHTML = "<h1>The Property you are looking for cannot be found in our system.</h1>";
}


// MODAL FAVORITES SECTION
// const FAVORITES = [];
// document.querySelector("#btn-add-favorite").addEventListener("click", function() {
//     let pn = this.getAttribute("data-pn");
//     if (FAVORITES.indexOf(pn) < 0)
//         FAVORITES.push(pn);

//     document.querySelector("#spn-badge").textContent = FAVORITES.length;
// });

// document.querySelector("#btn-show-favorites").addEventListener('click', function() {
//     let FilteredFavorites = [];
//     for(const pn of FAVORITES) {
//         for(const property of Properties) {
//             const {PropertyNumber,TransactionType, PropertyClassification, PropertyType, Price, PropertyName, Location, LotArea, FloorArea, Bedrooms,Bathrooms,PropertyImage,TitleStatus } = property;
//             if (PropertyNumber == pn) {
//                 FilteredFavorites.push(
//                     `
//                     <div class='col-lg-4 col-md-6 mb-4'>
//                     <div class="card property-item rounded overflow-hidden">
//                         <div class="position-relative overflow-hidden">
//                             <img src="${PropertyImage}" class="card-img-top border border-bottom-dark" style='height: 300px;'>
                             
//                             <div class="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3"">${TransactionType}
//                             </div>

//                             <div class="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${PropertyClassification} | ${PropertyType}
//                             </div>
//                         </div>    
                        
//                         <div class="p-4 pb-0">
//                             <div class="price-heart d-flex justify-content-between align-items-center">
//                                 <h5 class="prop-price mb-2 fw-bold ">${Price}</h5> 
//                                 <button class="heart-btn">
//                                     <i class="fa fa-regular fa-heart fa-xl" style="color:secondary"></i>
//                                 </button>
//                             </div>

//                             <a class="d-block h5 mb-2 text-decoration-none" href="">${PropertyName}
//                             </a>
                            
//                             <p><i class="fa fa-map-marker-alt me-2"></i>${Location}</p>
//                         </div>
//                         <div class="d-flex border-top">
//                             <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined me-2"></i> ${LotArea}</small>
                            
//                             <small class="flex-fill text-center border-end py-2"><i class="fa fa-solid fa-house me-2"></i>${FloorArea}</small>
                            
//                             <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed me-2"></i>${Bedrooms}</small>
                            
//                             <small class="flex-fill text-center py-2"><i class="fa fa-bath me-2"></i>${Bathrooms}</small>   
//                         </div>
//                     </div>
//                 </div>
//                     `
//                 );
//             }
//         }
//     }

//     document.querySelector("#modal-body-favorites").innerHTML = FilteredFavorites.join('');
// });


// PROPERTIES SECTION - ADDING TO FAVORITES

// Initialize favorites array
let favorites = [];
let Properties = []; // Global variable to store fetched properties

// Fetch data function

function _fetch() {
    fetch('pp3-new.json')
        .then(response => response.json())
        .then(data => {
            Properties = data; // Assign data to global Properties array
            _drawCards(Properties); // Draw cards
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Draw property cards function
function _drawCards(mappedProperties) {
//     // Clear previous search results`
    const searchResultsContainer = document.getElementById('sect-properties');
    searchResultsContainer.innerHTML = '';

    mappedProperties.forEach(property => {
        const { PropertyNumber, TransactionType, PropertyClassification, PropertyType, Price, PropertyName, Location, LotArea, FloorArea, Bedrooms, Bathrooms, PropertyImage } = property;

        // Create HTML for property card
        const propertyHTML = `
        <div class='col-lg-4 col-md-6 mb-4'>
            <div class="card property-item rounded overflow-hidden">
                <div class="position-relative overflow-hidden">
                    <img src="${PropertyImage}" class="card-img-top border border-bottom-dark" style='height: 300px;'>
                    <div class="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3">${TransactionType}</div>
                    <div class="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${PropertyClassification} | ${PropertyType}</div>
                </div>    
                <div class="p-4 pb-0">
                    <div class="price-heart d-flex justify-content-between align-items-center">
                        <h5 class="prop-price mb-2 fw-bold">${Price}</h5> 
                        <button class="heart-btn" data-pn="${PropertyNumber}" type="button">
                            <i class="fa fa-regular fa-heart fa-xl" style="color: secondary"></i>
                        </button>
                    </div>
                    <a class="d-block h5 mb-2 text-decoration-none" href="">${PropertyName}</a>
                    <p><i class="fa fa-map-marker-alt me-2"></i>${Location}</p>
                </div>
                <div class="d-flex border-top">
                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined me-2"></i>${LotArea}</small>
                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-solid fa-house me-2"></i>${FloorArea}</small>
                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed me-2"></i>${Bedrooms}</small>
                    <small class="flex-fill text-center py-2"><i class="fa fa-bath me-2"></i>${Bathrooms}</small>   
                </div>
            </div>
        </div>`;

        // Append property card to container
        searchResultsContainer.innerHTML += propertyHTML;
    });

    // Add event listener to heart button for each property
    document.querySelectorAll('.heart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const propertyNumber = button.getAttribute('data-pn');
            toggleFavorite(propertyNumber); // Toggle favorite status
            updateFavoritesBadge(); // Update favorites badge count
        });
    });
}

// Toggle favorite status function
function toggleFavorite(propertyNumber) {
    const index = favorites.indexOf(propertyNumber);
    if (index === -1) {
        favorites.push(propertyNumber); // Add to favorites
        // Change the color of the heart icon to red
        const button = document.querySelector(`.heart-btn[data-pn="${propertyNumber}"]`);
        button.innerHTML = '<i class="fa fa-solid fa-heart fa-xl" style="color: red"></i>';
    } else {
        favorites.splice(index, 1); // Remove from favorites
        // Change the color of the heart icon back to default
        const button = document.querySelector(`.heart-btn[data-pn="${propertyNumber}"]`);
        button.innerHTML = '<i class="fa fa-regular fa-heart fa-xl" style="color: secondary"></i>';
    }
}

// Update favorites badge count function
function updateFavoritesBadge() {
    document.getElementById('spn-badge').textContent = favorites.length;
}

// Show favorites modal function
document.getElementById('btn-show-favorites').addEventListener('click', () => {
    const filteredFavorites = Properties.filter(property => favorites.includes(property.PropertyNumber));
    const modalBody = document.getElementById('modal-body-favorites');
    modalBody.innerHTML = '';
    filteredFavorites.forEach(property => {
        // Create HTML for favorite property card
        const favoriteHTML = `
        <div class='col-lg-4 col-md-6 mb-4'>
            <div class="card property-item rounded overflow-hidden">
                <img src="${property.PropertyImage}" class="card-img-top border border-bottom-dark" style='height: 300px;'>
                <div class="card-body">
                    <h5 class="card-title">${property.PropertyName}</h5>
                    <p class="card-text">${property.Location}</p>
                    <p class="card-text">${property.Price}</p>
                </div>
            </div>
        </div>`;
        modalBody.innerHTML += favoriteHTML;
    });
});

// Initial fetch
_fetch();
