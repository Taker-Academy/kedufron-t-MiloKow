document.addEventListener('DOMContentLoaded', function() {
  main();
  const divElements = document.querySelectorAll('.article');
  divElements.forEach(function(divElement) {
    divElement.addEventListener('click', function() {
      const destination = divElement.getAttribute('dest');
      if (destination) {
        window.location.href = destination;
      }
    });
  });
});
async function main() {
  try {
    const response = await axios ({
      method: 'GET',
      url: 'https://api.kedufront.juniortaker.com/item/',
    });
    const items = response.data;
    const nameElements = document.querySelectorAll('.name');
    const priceElements = document.querySelectorAll('.price');
    const imgElements = document.querySelectorAll('.image');

    for (let i = 0; i < 6; i++) {
      const item = items[i];
      if (nameElements[i]) {
        nameElements[i].textContent = item.name;
        priceElements[i].textContent = item.price;
      }
      const imageUrl = await getImageById(item._id);
      imgElements[i].src = imageUrl;
      imgElements[i].alt = item.name;
    }
  } catch(error) {
    console.error('Une erreur s\'est produite :', error);
  }
}

async function getImageById(id) {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.kedufront.juniortaker.com/item/picture/${id}`,
    });
    return response.config.url;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération de l\'image :', error);
    return null;
  }
}

async function getItemById(id) {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.kedufront.juniortaker.com/item/${id}`,
    });
    const items = response.data;
    const item = items[id - 1];
    return item;
  } catch(error) {
    return null;
  }
}

function saveBasket(basket) {
  localStorage.setItem("basket", basket);
}

function getBasket() {
  let basket = localStorage.getItem("basket");
  if(basket == null){
    return [];
  }else{
    return Array.from(basket)
  }
}

function addBasket(id) {
  let basket = getBasket();
  product = getItemById(id);
  let FoundProduct = basket.find(p => id == product.id);
  if(FoundProduct != undefined) {
    FoundProduct.quantity++;
  } else {
    product.quantity = 1;
    basket.push(product);
  }
  saveBasket(basket);
  console.log(basket);
}

function removeBasket(product) {
  let basket = getBasket();
  basket = basket.filter(p => p.id != product.id);
  saveBasket(basket);
}

function changeQuantity(product, quantity) {
  let basket = getBasket();
  let FoundProduct = basket.find(p => id == product.id);
  if(foundProduct != undefined) {
    foundProduct.quantity+=quantity;
    if (foundProduct.quantity <= 0) {
      removeBasket(foundProduct);
    } else {
      saveBasket(basket);
    }
  }
}

function getNumberProduct() {
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity;
  }
  return number;
}

function getPrice() {
  let basket = getBasket();
  let total = 0;
  for (let product of basket) {
    number += product.quantity * product.price;
  }
  return number;
}
