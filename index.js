// Fetch products data
fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    renderProducts(products);
  })
  .catch(error => {
    console.log('Error fetching products:', error);
  });

// Render products on the page
function renderProducts(products) {
  const container = document.getElementById('products-container');
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
    `;
    container.appendChild(productElement);
  });
}
