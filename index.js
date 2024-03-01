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
