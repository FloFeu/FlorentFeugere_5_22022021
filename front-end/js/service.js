//URL de l'api définie en constante//
const baseURL = 'http://localhost:3000/api';


//pastille de nombre d'articles dans le panier
const pastille = document.getElementById('itemsInCart');
if (localStorage.getItem('products') != null ){ 
    const locStrLength = JSON.parse(localStorage.getItem('products')).length;   
    pastille.innerText = locStrLength;
} else {
    pastille.style.display = "none";
}
