
// Récupérer l'url de la page afin de récupérer l'id du produit
let currentUrl = window.location.href;

// Trouver l'id du produit
const urlId = currentUrl.split('?id=');
console.log(urlId[1]);

//Utiliser l'id pour récupérer l'item complet
const api = "http://localhost:3000/api/cameras/";
const productUrl = api + urlId[1];

//Requête API pour récupérer le produit et traduire le résultat en tableau
function fetchDataProduct(){
   
    fetch(productUrl)
    .then(reponse => reponse.json())
    .then((dataProduct) => {
        console.log(dataProduct);
        document.querySelector(".details").innerHTML +=`
        <img src="${dataProduct.imageUrl}" class="details__img" alt="" />
        <div class="details__name">
        <h2>${dataProduct.name}</h2>
        </div>
        <div class="details__text">
        <p>
        ${dataProduct.description}
      </p>
        </div>
        <div class="details__options">
      <label for="lense-select">Choisissez une lentille:</label>
      <select class="options__select" name="lenses" id="lense-select" required>
        <option value="">--Choisissez une option--</option>
        <option value="1">${dataProduct.lenses[0]}</option>
        <option value="2">${dataProduct.lenses[1]}</option>
      </select>
    </div>
    <div class="details__price">
      <p><strong>${dataProduct.price/100}</strong> €</p>
    </div>
    <button class="details__btn" name="Ajouter au panier" type="submit">
      Ajouter au panier
    </button>
        `; 
    })
}
fetchDataProduct();


// //Prendre les résultats du fetch et les mettre dans mon HTML
// function displayProduct(){
//     document.querySelector(".details").innerHTML +=`
//     <img src="${imageUrl}" class="details__img" alt="" />
//     <div class="details__name">
//       <h2>XXX XX XX</h2>
//     </div>
//     <div class="details__text">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//         aliquip ex ea commodo consequat. Duis aute irure dolor in
//         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//         pariatur.
//       </p>
//     </div>
//     <div class="details__options">
//       <label for="lense-select">Choisissez une lentille:</label>
//       <select class="options__select" name="lenses" id="lense-select" required>
//         <option value="">--Choisissez une option--</option>
//         <option value="1">Lentille 1</option>
//         <option value="2">Lentille 2</option>
//       </select>
//     </div>
//     <div class="details__price">
//       <p><strong>506</strong>€</p>
//     </div>
//     <button class="details__btn" name="Ajouter au panier" type="submit">
//       Ajouter au panier
//     </button>
//     `;

// }
