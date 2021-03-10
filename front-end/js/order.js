// Récupérer l'url de la page afin de récupérer l'id du produit
let currentUrl = window.location.href;

// Trouver l'id de la commande et le prix total envoyé dans l'url
const urlOrder = currentUrl.split('=');
const orderId = urlOrder[1].substring(0, urlOrder[1].length-6);
const orderPrice = urlOrder[2];

console.log(orderId);

//affichage dans la page des id et prix
document.getElementById('order__id').innerHTML += `<strong>${orderId}</strong>`;
document.getElementById('order__price').innerHTML += `<strong>${orderPrice}</strong>`;