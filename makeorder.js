
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
       delay:3000,
       disableOnInteraction:false
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,  
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
       delay:3000,
       disableOnInteraction:false
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,  
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".category-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
       delay:3000,
       disableOnInteraction:false
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,  
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });



const productsEl = document.querySelector(".renderProduct");
const cartItemsEl = document.querySelector("#To_cart");
let products = [ // array that hold values in object
    {
        id : 1,
        imgSrc : "photo/product-1.png",
        instock : 8,
        price : 200
    },
    {
        id : 2,
        imgSrc : "photo/product-2.png",
        instock : 8,
        price : 150 
    },
    {
        id : 3,
        imgSrc : "photo/product-3.png",
        instock : 8,
        price : 100 

    },
    {
      id : 4,
      imgSrc : "photo/product-4.png",
      instock : 8,
      price : 120 

  },
  {
    id : 5,
    imgSrc : "photo/product-5.png",
    instock : 8,
    price : 150 

},
{
  id : 6,
  imgSrc : "photo/product-6.png",
  instock : 8,
  price : 150 

},
{
  id : 7,
  imgSrc : "photo/product-7.png",
  instock : 8,
  price : 150 

},
{
  id : 8,
  imgSrc : "photo/product-8.png",
  instock : 8,
  price : 150 

}
]
// SELECT ELEMENTS
// const subtotalEl = document.querySelector(".subtotal");
// const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// RENDER PRODUCTS
function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
    <div class="box">
    <img src="${product.imgSrc}" alt="">
    <h3>green lemon</h3>
    <div class="price">price is : ${product.price}</div>
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
    </div>
    <button  onclick="addToCart(${product.id})" class="btn">add to cart</button>
</div>`;
  });
}
renderProdcuts();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal


// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
    <div class="swiper-slide box">
    <img class="imageCart" src="${item.imgSrc}" alt="">
     <div class="action">
     <button class="plus" onclick="changeNumberOfUnits('plus',${item.id})">+</button>
     ${item.numberOfUnits}
    <button class="minus" onclick="changeNumberOfUnits('minus',${item.id})">-</button>
     </div>
      <button class="removeBtn" onclick="removeItemFromCart(${item.id})">remove</button>
      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

function checkCart(){
   if(cart.length === 0){
      console.log("empty");
   }
}
checkCart()

function openfunction() {
  document.getElementById("menu").style.width="200px";
}

function closefunction() {
  document.getElementById("menu").style.width="0px";
}
