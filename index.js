// fetch('https://api.kedufront.juniortaker.com/item/')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     const dataContainer = document.getElementById('data-container');
//     const htmlContent = `
//       <h2>${data.item.name}</h2>
//       <p>${data.item.description}</p>
//       <p>${data.item.price} €</p>
//       <img src="static/img/${data.item.image}.png"></img>
//       <!-- Ajoutez ici d'autres éléments HTML en fonction de la structure de vos données -->
//     `;
//     dataContainer.innerHTML = htmlContent;
//   })
//   .catch(error => {
//     console.error('Une erreur s\'est produite lors de la récupération des données :', error);
//   });
// axios.get('https://api.example.com/data', { key: 'name' })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Une erreur s\'est produite :', error);
//   });
