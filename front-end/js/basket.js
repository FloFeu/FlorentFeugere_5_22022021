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
        </div>
        `;
    }
};
