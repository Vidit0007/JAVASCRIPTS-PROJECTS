fetch('https://fakestoreapi.com/products?limit=5')
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = '';
    completedata.forEach((product) => {
      data1 += `
      <div class="card">
      <h1 class="t1">${product.title}</h1>
      <img src="${product.image}" alt="img1" class="images">
      <p >${product.description}</p>
      <p class="c1">${product.category}</p>
      <p class="p1">$${product.price}</p>
    </div>
      `;
    });
    document.getElementById("cards").innerHTML = data1;
  })
  .catch((error) => {
    console.log(error);
  });
