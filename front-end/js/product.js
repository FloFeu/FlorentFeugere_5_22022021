
// Récupérer l'url de la page afin de récupérer l'id du produit
let currentUrl = window.location.href;

// Trouver l'id du produit
const urlId = currentUrl.split('?id=');
const productId = urlId[1];

//Utiliser l'id pour récupérer l'item complet
const api = "http://localhost:3000/api/cameras/";
const productUrl = api + urlId[1];


//Récupérer les infos d'un produit depuis l'API
function fetchDataProduct(){
  fetch(productUrl)                       //récupérer l'id de l'API
    .then(reponse => reponse.json())      //traduire la réponse en JSON
      .then((donneesProduit) => {         // Cette réponse, 
        console.table(donneesProduit);    // l'afficher dans la console
        displayProduct(donneesProduit);   // et appeler la fonction displayProduct() déclarée en dessous.
      })
    .catch(function(error){
      console.log("Il y a eu un problème avec la récupération de l'id")
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
              <strong>${data.price/100}</strong> €
            </p>
            <input type="hidden" id="productPrice" value="${data.price}">
          </div>
          <button class="details__btn" id="addToCart" type="button" onclick="addToCart()">
            Ajouter au panier
          </button>
          `; 
          
  // Ajouter le contenu de l'array lenses dans le menu select
  for (let i = 0; i < data.lenses.length ; i++ ){
    const option = document.createElement("option");              //création de <option>
    option.value = `${data.lenses[i]}`;                           // ça récupère l'index du tableau 
    option.innerHTML = `${data.lenses[i]}`;                      // le nom de la lentille est ajouté à <option> 
    document.getElementById("lense-select").appendChild(option);  //ça ajoute <option> en enfant de l'id #lense-select 
  };
  console.log(data.lenses);
};

//Produit selectionné(avec son option) stocké dans une variable qui est passée en paramètre d'une autre fonction
function addToCart(){
  if (document.getElementById("lense-select").value != ""){
   let thisProduct = {
    name: document.querySelector('h2').innerText,
    price: document.getElementById('productPrice').value,
    lense: document.getElementById("lense-select").value,
    imageUrl: document.querySelector('.details__img').src,
    _id: productId
   }
   addToStorage(thisProduct);
   document.location.reload();
 } else {
   alert('Veuillez choisir une lentille.')
 }
}

// Cette fonction récupère le produit affiché et l'envoi dans le localStorage

function addToStorage(product){
  let products = [];
  const strProduct = localStorage.getItem('products');
  if (strProduct != null){
     products = JSON.parse(strProduct);
  } 
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
}

fetchDataProduct();
