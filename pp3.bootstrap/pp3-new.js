// HERO SECTION

// Transaction Buttons
const buyBtn = document.querySelector('.buy-btn');
const rentBtn = document.querySelector('.rent-btn');
const sellBtn = document.querySelector('.sell-btn');

buyBtn.addEventListener('click', () => {
    buyBtn.classList.add('active');
    rentBtn.classList.remove('active');
    sellBtn.classList.remove('active');
    const keyword = document.getElementById('search-input').value.toLowerCase();
    filterProperties('Buy', keyword);
});

rentBtn.addEventListener('click', () => {
    rentBtn.classList.add('active');
    buyBtn.classList.remove('active');
    sellBtn.classList.remove('active');
    const keyword = document.getElementById('search-input').value.toLowerCase();
    filterProperties('Rent', keyword);
});

sellBtn.addEventListener('click', () => {
    sellBtn.classList.add('active');
    buyBtn.classList.remove('active');
    rentBtn.classList.remove('active');
    const keyword = document.getElementById('search-input').value.toLowerCase();
    filterProperties('Sell', keyword);
});

// Hero - Seach Bar & Button
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    const transactionType = document.querySelector('.btn.btn-color.active').textContent.toUpperCase();
    filterProperties(transactionType, keyword);

    const searchInput = document.getElementById('search-input').value;
    const searchUrl = `properties.html?keyword=${searchInput}`;
    window.open(searchUrl, '_blank');
});

// Search Results Display at Properties Page
function filterProperties(transactionType, keyword) {
    fetch('pp3-new.json')
        .then(response => response.json())
        .then(data => {
            const filteredProperties = data.filter(property => 
                property.TransactionType.toLowerCase().includes(transactionType.toLowerCase()) &&
                (
                    property.PropertyClassification.toLowerCase().includes(keyword) ||
                    property.PropertyType.toLowerCase().includes(keyword) ||
                    property.Price.toLowerCase().includes(keyword) ||
                    property.PropertyName.toLowerCase().includes(keyword) ||
                    property.Location.toLowerCase().includes(keyword) ||
                    property.LotArea.toLowerCase().includes(keyword) ||
                    property.FloorArea.toLowerCase().includes(keyword) ||
                    property.Bedrooms.toLowerCase().includes(keyword) ||
                    property.Bathrooms.toLowerCase().includes(keyword)
                )
            );

            const searchResultsContainer = document.getElementById('filtered-properties');
            searchResultsContainer.innerHTML = '';

            filteredProperties.forEach(property => {
                const propertyHTML = `        
                <div class='col-lg-4 col-md-6 mb-4'>
                  <div class="card property-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                      <img src="${property.PropertyImage}" class="card-img-top border border-bottom-dark" style='height: 300px;'>
                      <div class="card-body rounded-pill text-light position-absolute start-0 top-0 m-4 py-1 px-3">${property.TransactionType}</div>
                      <div class="property-tab bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.PropertyClassification} | ${property.PropertyType}</div>
                    </div>    
                    <div class="p-4 pb-0">
                      <div class="price-heart d-flex justify-content-between align-items-center">
                        <h5 class="prop-price mb-2 fw-bold">${property.Price}</h5> 
                        <button class="heart-btn">
                          <i class="fa fa-regular fa-heart fa-xl" style="color: secondary"></i>
                        </button>
                      </div>
                      <a class="d-block h5 mb-2 text-decoration-none" href="">${property.PropertyName}</a>
                      <p><i class="fa fa-map-marker-alt me-2"></i>${property.Location}</p>
                    </div>
                    <div class="d-flex border-top">
                      <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined me-2"></i>${property.LotArea}</small>
                      <small class="flex-fill text-center border-end py-2"><i class="fa fa-solid fa-house me-2"></i>${property.FloorArea}</small>
                      <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed me-2"></i>${property.Bedrooms}</small>
                      <small class="flex-fill text-center py-2"><i class="fa fa-bath me-2"></i>${property.Bathrooms}</small>   
                    </div>
                  </div>
                </div>`;
              
                searchResultsContainer.innerHTML += propertyHTML;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function initialFilterProperties() {
    const activeTab = document.querySelector('.btn.btn-color.active').textContent.toUpperCase();
    filterProperties(activeTab, '');
}




// PROPERTIES SECTION
