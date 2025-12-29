const productsContainer = document.getElementById("products");

function fetchProducts() {
  const url = "https://fakestoreapi.com/products";

  axios
    .get(url)
    .then((response) => {
      showData(response.data);
    })
    .catch((error) => {
      console.error("Xatolik:", error);
      productsContainer.innerHTML = "<p>Mahsulotlar yuklanmadi</p>";
    });
}

function showData(products) {
  productsContainer.innerHTML = "";
  const firstFour = products.slice(0, 4);
  firstFour.forEach((product) => {
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
}

window.addEventListener("DOMContentLoaded", fetchProducts);
