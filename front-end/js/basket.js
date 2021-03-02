// Récupérer les données dans le localStorage
let produitsPanier = [];

const storageProduit = localStorage.getItem('products');
if (storageProduit != null) {
    produitsPanier = JSON.parse(storageProduit);
    displayStorageToPage(produitsPanier);
    console.table(produitsPanier);
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
            <button class="basket__removeitem" id="removeItem" type="button" onclick="removeFromBasket()">
                X 
            </button>
            <input type="hidden" id="productId" value="${data.indexOf(data[i])}">
        </div>
        `;
        console.log(data.indexOf(data[i]))   
        
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



function removeFromBasket(){
    let productId = document.getElementById('productId').value; //valeur renvoyée est tjrs 0, c'est pas ce que je veux
    console.log(productId);
    produitsPanier.splice(productId);
    document.location.reload();
    
    

}