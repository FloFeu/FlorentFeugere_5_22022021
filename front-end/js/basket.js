// Récupérer les données dans le localStorage
let produitsPanier = [];

const storageProduit = localStorage.getItem('products');
if (storageProduit != null) {
    document.getElementById('basketempty').style.display = "none";
    produitsPanier = JSON.parse(storageProduit);
    displayStorageToPage(produitsPanier);
    console.table(produitsPanier);
} else {
    document.getElementById('itemsInBasket').style.display ="none";
    document.getElementById('basketempty').style.display = "block";
}

function displayStorageToPage(data){
    for (let i = 0 ; i < data.length ; i++){
        document.querySelector(".main__basket").innerHTML += `
        <div class="basket__product">
            <img src="${data[i].imageUrl}" alt="" class="basket__productimg">
            <h3 class="basket__productname">
                ${data[i].name}
            </h3>
            <div class="basket__productprice">
                <strong>${data[i].price/100}€</strong>
            </div>
            <div class="basket__productdetails">
                Lentille : <strong>${data[i].lense}</strong>
            </div>
            <button class="basket__removeitem" id="removeItem" type="button" onclick="removeFromBasket(${i})">
                <i class="far fa-trash-alt"></i>
            </button>
            <div id="productIndex" class="nodisplay">  </div>
 
        </div>
        `;
    }
    
    //appeler la fonction somme des prix
    displaySumOfPrices(data);

};


function displaySumOfPrices(data){
    let total = 0;
    // Récupére la somme des prix
    for (let i = 0; i < data.length ; i++){
        total += Number(data[i].price)/100;
    }
    console.log(total);
    document.querySelector(".basket__price").innerHTML += `
    <strong> PRIX TOTAL : ${total} €</strong>
    `;
};



function removeFromBasket(element){
console.log(element);                                    //récupération de l'indice du produit dans le tableau 
    const strProduct = localStorage.getItem('products'); //on récupère le localStorage
    products = JSON.parse(strProduct);                   //on le parse (products = JSON.parse(localStorage.getItem('products')) aurait marché aussi)
    products.splice(element, 1);
    if (products.length == 0){
        localStorage.clear();
    } else{                        //on enlève de l'array l'élément grâce à son indice
        localStorage.setItem('products', JSON.stringify(products)); //On renvoie le nouvel array au localStorage
    }
    document.location.reload();                          //rafraichissement de la page
}

function clearStorage(){
    localStorage.clear();
    document.location.reload();
}

// Récupérer les infos du formulaire




function submitForm(){
    let formInfos = {
        "firstName": document.getElementById('firstName').value,
        "lastName": document.getElementById('lastName').value,
        "address": document.getElementById('address').value,
        "city": document.getElementById('city').value,
        "email": document.getElementById('email').value
    }
    console.log(formInfos);
}