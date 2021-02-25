
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
        displayProduct(dataProduct);
    })
}

//Fonction qui prend le résultat de la requête GET produit et l'affiche sur la page
function displayProduct(data){
  document.querySelector(".details").innerHTML +=`
          <img src="${data.imageUrl}" class="details__img" alt="" />
          <div class="details__name">
            <h2>${data.name}</h2>
          </div>
          <div class="details__text">
            <p>
              ${data.description}
            </p>
          </div>
          <div class="details__options">
            <label for="lense-select">Choisissez une lentille:</label>
            <select class="options__select" name="lenses" id="lense-select" required>
                <option value="">--Choisissez une option--</option>
            </select>
          </div>
          <div class="details__price">
            <p>
              <strong>${data.price/100}</strong> €</p>
          </div>
          <button class="details__btn" name="Ajouter au panier" type="submit">
            Ajouter au panier
          </button>
          `;

  // Ajouter le contenu de l'array lenses dans le menu select

  for (let i = 0; i < data.lenses.length ; i++ ){
    const option = document.createElement("option"); //création de <option>
    option.value += data.lenses.indexOf(`${data.lenses[i]}`); // ça récupère l'index du tableau 
    option.innerHTML += `${data.lenses[i]}`; // le nom de la lentille est ajouté à <option> 
    document.getElementById("lense-select").appendChild(option); //ça ajoute <option> en enfant de l'id #lense-select 
  };
};

fetchDataProduct();