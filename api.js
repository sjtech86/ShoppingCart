loadData();

async function loadData() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const products = await response.json();

  const productList = products.map(function (item, index) {
    const { title, price, image } = item;

    const productCard = `<div class="productCard">
                    <div class="imgbox">
                        <img src="${image}" alt="bag image">
                    </div>
                    <div class="bottom">
                        <p>${title}</p>
                        <p class="price">£${price}</p>
                        <button onclick="addtocart(0)">Add to cart</button>
                    </div>
                </div>`;

    return productCard;
  });

  document.getElementById("box1").innerHTML = productList.join("");
}
