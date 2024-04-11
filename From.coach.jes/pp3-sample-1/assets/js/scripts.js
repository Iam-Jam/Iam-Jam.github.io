const PRODUCTS = [];

_fetch();

function _fetch() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "assets/files/products.json", true);
    xhttp.send();
    xhttp.addEventListener('load', function() {
        let result = JSON.parse(xhttp.responseText);
        
        for (const product of result)
            PRODUCTS.push(product);

        _drawCards();
    });
    
}

function _drawCards() {

    let ProductsHtml = PRODUCTS.map( (product) => {
        const {itemSku, itemType, itemName, itemBrand, itemPrice, itemQty, itemImage, brandLink} = product;
        return `
                <div class='col-md-3 mt-3'>
                    <div class="card">
                        <img src="${itemImage}" class="card-img-top" style='height: 300px;'>
                        <div class="card-body">
                            <h5 class="card-title">${itemName}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${itemType.toUpperCase()}</h6>
                            <p class="card-text"><b>${itemQty}</b> pcs. available - Price: <b>$${itemPrice.toFixed(2)}</b></p>
                            <a href="${brandLink}" target="_blank" class="card-link text-decoration-none">${itemBrand}</a>
                            <a href="#" class="card-link text-decoration-none">View More</a>
                        </div>
                    </div>
                </div>`;
    });

    document.getElementById("sect-products").innerHTML = ProductsHtml.join('');
}