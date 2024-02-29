document.addEventListener('DOMContentLoaded', () => {
  main();
});
async function main() {
  try {
    const response = await axios ({
      method: 'GET',
      url: 'https://api.kedufront.juniortaker.com/item/',
    });
    console.log(response.data)
    const items = response.data;
    const nameElements = document.querySelectorAll('.name');
    const priceElements = document.querySelectorAll('.price');

    items.forEach((item, index) => {
      if (nameElements[index]) {
        nameElements[index].textContent = item.name;
        priceElements[index].textContent = item.price;
      }
    });
  } catch(error) {
    console.error('Une erreur s\'est produite :', error);
  }
}
