
// requête AJAX
function getProducts(uri){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', baseURL + uri );
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 3){
            if (xhr.status == 200){
                const response = JSON.parse(xhr.responseText);
                console.log(response);
                displayProducts(response);
            } else{
                console.log("une erreur s'est produite");
            }
        } 
    };
    xhr.send();
    
    //Si le serveur ne répond pas 
    xhr.onerror = function(){
        console.log('impossible de se connecter au serveur');
        document.querySelector('.serverIsDown').style.display = "block";
    }
}

// chercher les résultats de la requête API et les traduire pour les afficher

function displayProducts(products){
    for ( var i = 0 ; i < products.length ; i++){
        document.querySelector(".list__products").innerHTML += `
        <a href="product.html?id=${products[i]._id}" class="product"> 
          <img
            src="${products[i].imageUrl}"
            class="product__img"
            alt="appareil photo vintage 1"
          />
          <div class="product__description">
            <h2 class="product__name">${products[i].name}</h2>
            <p class="product__text">${products[i].description}</p>
            <p class="product__price"><strong>${products[i].price/100} €</strong></p>
          </div>
        </a>
        `;

    }
};

getProducts('/cameras')
