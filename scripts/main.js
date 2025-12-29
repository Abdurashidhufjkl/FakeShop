const productsContainer = document.getElementById("products");

axios
  .get("https://fakestoreapi.com/products")
  .then(function (response) {
    const products = response.data;

    productsContainer.innerHTML = "";


    products.slice(0, 4).forEach(function (product) {
      const card = document.createElement("div");
      card.className = "product";

      card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title.substring(0, 30)}...</h3>
                <p>${product.price} $</p>
                <button>Savatga qo‘shish</button>
            `;

      productsContainer.appendChild(card);
    });
  })
  .catch(function (error) {
    console.error("Xatolik:", error);
    productsContainer.innerHTML = "<p>Mahsulotlar yuklanmadi</p>";
  });

