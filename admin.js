let adminOrder = document.querySelector('.adminOrder');

let orders = JSON.parse(localStorage.getItem("CART"))

console.log(orders);

function renderProduct(){
    
orders.forEach((order) => {
    adminOrder.innerHTML += `
    <div class="box">
    <img src="${order.imgSrc}" alt="">
    <h3>product id is ${order.id}</h3>
     <div>number of order is : ${order.numberOfUnits}</div>
    <div>In stock is : ${order.instock}</div>
    <div> Price is : ${order.price}</div>
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
    </div>
</div>`
    
});
}
renderProduct();

    