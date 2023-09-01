const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
const men1=document.getElementById("men");
const men2=document.getElementById("men2");
const men3=document.getElementById("men3");
const men4=document.getElementById("men4");
const men5=document.getElementById("men5");
const women=document.getElementById("women");
const women1=document.getElementById("women1");
const women2=document.getElementById("women2");
const women3=document.getElementById("women3");
const women4=document.getElementById("women4");
const kids=document.getElementById("kids");
const kids1=document.getElementById("kids1");
const kids2=document.getElementById("kids2");
const kids3=document.getElementById("kids3");
const kids4=document.getElementById("kids4");
const similar1=document.getElementById("similar1");
const similar=document.getElementById("similar");

const similar2=document.getElementById("similar2");
// const addCart=document.getElementById("addCart");




close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
men1.addEventListener("click",()=>{
    similar.textContent="View Similar Products";
    similar.style.color="firebrick";
    similar.style.fontWeight="bold";
    similar.style.fontSize="25px";
    similar.style.marginLeft="25%";
    document.getElementById("menMenu").src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMHNoaXJ0fGVufDB8fDB8fHww&w=1000&q=80";
    document.getElementById("menMenu").style.height="200px"
    document.getElementById("menMenu").style.marginLeft="30%"

    document.getElementById("menMenu1").src="https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    document.getElementById("menMenu1").style.height="200px"
    document.getElementById("menMenu2").src="https://m.media-amazon.com/images/I/61gwsWVNGUL._SX679_.jpg"
    document.getElementById("menMenu2").style.height="200px"
    document.getElementById("menMenu3").src="https://5.imimg.com/data5/SELLER/Default/2022/9/GD/BR/CF/63099671/men-check-shirt-500x500.jpg"
    document.getElementById("menMenu3").style.height="200px"

})
men2.addEventListener("click",()=>{
    document.getElementById("menMenu").src="https://rukminim2.flixcart.com/image/550/650/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=90&crop=false";
    document.getElementById("menMenu").style.height="200px"

    document.getElementById("menMenu1").src="https://www.myshopstore.in/wp-content/uploads/2023/01/Ravishing-Men-Tshirt-Men-Apparel.jpg"
    document.getElementById("menMenu1").style.height="200px"
    document.getElementById("menMenu2").src="https://images.meesho.com/images/products/42958844/iwh5j_512.webp"
    document.getElementById("menMenu2").style.height="200px"
    document.getElementById("menMenu3").src="https://assets.ajio.com/medias/sys_master/root/20230810/uHn0/64d3e8fea9b42d15c99f6d1b/-473Wx593H-466428340-taupe-MODEL.jpg"
    document.getElementById("menMenu3").style.height="200px"

})
men3.addEventListener("click",()=>{
    document.getElementById("menMenu").src="https://media.istockphoto.com/id/527236518/photo/mans-legs.jpg?s=612x612&w=0&k=20&c=lczyG0ZkWelpn_o-I_VpjAMo_sA3WpdWHMlgZjCSE-k=";
    document.getElementById("menMenu").style.height="200px"

    document.getElementById("menMenu1").src="https://thehouseofrare.com/cdn/shop/products/IMG_0051_9678f6ee-272b-46c3-9020-6d568273dd03.jpg?v=1663830971"
    document.getElementById("menMenu1").style.height="200px"
    document.getElementById("menMenu2").src="https://i.pinimg.com/550x/59/14/0a/59140a56d936c688a7852b77b31a5487.jpg"
    document.getElementById("menMenu2").style.height="200px"
    document.getElementById("menMenu3").src="https://cdn.shopify.com/s/files/1/0504/3054/1978/files/BM22895-001_600x.jpg?v=1690919275"
    document.getElementById("menMenu3").style.height="200px"

})
men4.addEventListener("click",()=>{
    document.getElementById("menMenu").src="https://assets.ajio.com/medias/sys_master/root/20230602/uGY6/6479270242f9e729d70ad623/-473Wx593H-461370099-yellow-MODEL.jpg";
    document.getElementById("menMenu").style.height="200px"

    document.getElementById("menMenu1").src="https://assets.ajio.com/medias/sys_master/root/20230804/gQJv/64cc29a8a9b42d15c98a7fac/-473Wx593H-466417834-pink-MODEL.jpg"
    document.getElementById("menMenu1").style.height="200px"
    document.getElementById("menMenu2").src="https://assets.ajio.com/medias/sys_master/root/20220905/VsWz/6315cfc9aeb269dbb36aedf5/-473Wx593H-469168474-teal-MODEL.jpg"
    document.getElementById("menMenu2").style.height="200px"
    document.getElementById("menMenu3").src="https://assets.ajio.com/medias/sys_master/root/20230624/K1Lh/64965f5beebac147fcf174e9/-473Wx593H-465202801-navy-MODEL.jpg"
    document.getElementById("menMenu3").style.height="200px"

})
men5.addEventListener("click",()=>{
    document.getElementById("menMenu").src="https://5.imimg.com/data5/TD/IV/KF/SELLER-13765940/men-s-night-dress-manufacturer-500x500.jpg";
    document.getElementById("menMenu").style.height="200px"

    document.getElementById("menMenu1").src="https://www.hancockfashion.com/cdn/shop/products/c408e803-a65a-4099-b9f9-3a653039e9081612324167655-Hancock-Men-Black--White-Striped-Night-suit-1731612324165648-1_1024x1024.jpg?v=1625634622"
    document.getElementById("menMenu1").style.height="200px"
    document.getElementById("menMenu2").src="https://m.media-amazon.com/images/I/71OtrPX3S1L._AC_UY1100_.jpg"
    document.getElementById("menMenu2").style.height="200px"
    document.getElementById("menMenu3").src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18005714/2022/6/6/847e0921-6bb7-4ff5-87bb-498e7c640a551654525722892DAMENSCHMenBlackChecksWovenCottonStretchPyjama1.jpg"
    document.getElementById("menMenu3").style.height="200px"

})
women.addEventListener("click",()=>{
    similar1.textContent="View Similar Products";
    similar1.style.color="firebrick";
    similar1.style.fontWeight="bold";
    similar1.style.fontSize="25px";
    similar1.style.marginLeft="25%";
    document.getElementById("womenMenu").src="https://assets.ajio.com/medias/sys_master/root/20230822/ZmAS/64e4b8ddddf7791519603692/-473Wx593H-466484812-white-MODEL.jpg";
    document.getElementById("womenMenu").style.height="200px"
    document.getElementById("womenMenu").style.marginLeft="30%"

    document.getElementById("womenMenu1").src="https://assets.ajio.com/medias/sys_master/root/20230819/XdLM/64dfca11ddf779151953bfe3/-473Wx593H-466474786-blue-MODEL.jpg"
    document.getElementById("womenMenu1").style.height="200px"
    document.getElementById("womenMenu2").src="https://assets.ajio.com/medias/sys_master/root/20230426/NEhr/6448f123d55b7d0c637f9731/-473Wx593H-466097772-black-MODEL.jpg"
    document.getElementById("womenMenu2").style.height="200px"
    document.getElementById("womenMenu3").src="https://assets.ajio.com/medias/sys_master/root/20230823/GAAj/64e50d10ddf7791519620fd9/-473Wx593H-466484281-yellow-MODEL.jpg"
    document.getElementById("womenMenu3").style.height="200px"

})
women1.addEventListener("click",()=>{
    document.getElementById("womenMenu").src="https://www.fashionvibes.net/cdn/shop/products/kanjivaram-silk-saree-cyan-saree-fashionvibes-13920594100273_grande.jpg?v=1618104111";
    document.getElementById("womenMenu").style.height="200px"

    document.getElementById("womenMenu1").src="https://cdn.shopify.com/s/files/1/0592/3117/4816/files/Types_of_Bandhani_Sarees_in_India_480x480.jpg?v=1664647140"
    document.getElementById("womenMenu1").style.height="200px"
    document.getElementById("womenMenu2").src="https://assets.ajio.com/medias/sys_master/root/20230822/ejNx/64e46791ddf77915195d67d3/-473Wx593H-463532274-green-MODEL.jpg"
    document.getElementById("womenMenu2").style.height="200px"
    document.getElementById("womenMenu3").src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21855538/2023/2/7/1f2c9ce2-d7f6-4ed4-bfd1-54ab32147d8b1675745773039Chhabra555WomenSarees1.jpg"
    document.getElementById("womenMenu3").style.height="200px"

})
women3.addEventListener("click",()=>{
    document.getElementById("womenMenu").src="https://assets.ajio.com/medias/sys_master/root/20230809/H7Qv/64d39670eebac147fcb93196/-473Wx593H-466438074-blue-MODEL.jpg";
    document.getElementById("womenMenu").style.height="200px"

    document.getElementById("womenMenu1").src="https://assets.ajio.com/medias/sys_master/root/20230731/MQjf/64c7a6e2eebac147fc972aaa/-1117Wx1400H-466401711-pink-MODEL.jpg"
    document.getElementById("womenMenu1").style.height="200px"
    document.getElementById("womenMenu2").src="https://assets.ajio.com/medias/sys_master/root/20230818/xIDv/64df71b7afa4cf41f55e527a/-473Wx593H-466473748-pink-MODEL.jpg"
    document.getElementById("womenMenu2").style.height="200px"
    document.getElementById("womenMenu3").src="https://assets.ajio.com/medias/sys_master/root/20230726/LKpc/64c148efa9b42d15c970dd03/-473Wx593H-466387645-green-MODEL.jpg"
    document.getElementById("womenMenu3").style.height="200px"

})
women2.addEventListener("click",()=>{
    document.getElementById("womenMenu").src="https://assets.ajio.com/medias/sys_master/root/20230713/GA63/64b0268da9b42d15c952247f/-473Wx593H-443013941-mediumblue-MODEL2.jpg";
    document.getElementById("womenMenu").style.height="200px"

    document.getElementById("womenMenu1").src="https://assets.ajio.com/medias/sys_master/root/20230613/N8QD/6488902942f9e729d73f0a0b/-473Wx593H-440794191-black-MODEL.jpg"
    document.getElementById("womenMenu1").style.height="200px"
    document.getElementById("womenMenu2").src="https://assets.ajio.com/medias/sys_master/root/20220826/9Yi8/6307cfadaeb2691761a68e3a/-473Wx593H-441143842-white-MODEL.jpg"
    document.getElementById("womenMenu2").style.height="200px"
    document.getElementById("womenMenu3").src="https://assets.ajio.com/medias/sys_master/root/20230208/M5y5/63e343e7f997dde6f494688d/-473Wx593H-443007480-mediumblue-MODEL.jpg"
    document.getElementById("womenMenu3").style.height="200px"

})
women4.addEventListener("click",()=>{
    document.getElementById("womenMenu").src="https://assets.ajio.com/medias/sys_master/root/20230710/v5mh/64abefe5eebac147fc5fdf53/-473Wx593H-466345660-pink-MODEL.jpg";
    document.getElementById("womenMenu").style.height="200px"

    document.getElementById("womenMenu1").src="https://assets.ajio.com/medias/sys_master/root/20230620/OvF2/6492064942f9e729d756f04e/-473Wx593H-463186620-blue-MODEL.jpg"
    document.getElementById("womenMenu1").style.height="200px"
    document.getElementById("womenMenu2").src="https://assets.ajio.com/medias/sys_master/root/20230602/jOsw/647986b9d55b7d0c6340deee/-473Wx593H-462573542-beige-MODEL.jpg"
    document.getElementById("womenMenu2").style.height="200px"
    document.getElementById("womenMenu3").src="https://assets.ajio.com/medias/sys_master/root/20220608/uliG/629f9c28f997dd03e2690756/-473Wx593H-441141034-red-MODEL.jpg"
    document.getElementById("womenMenu3").style.height="200px"

})
kids.addEventListener("click",()=>{
    similar2.textContent="View Similar Products";
    similar2.style.color="firebrick";
    similar2.style.fontWeight="bold";
    similar2.style.fontSize="25px";
    similar2.style.marginLeft="25%";
    document.getElementById("kidsMenu").src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17045988/2022/2/4/0d9dcffa-936e-4129-a098-e184862a1e9d1643958755775pspeachesMagentaFloralA-LineDress1.jpg";
    document.getElementById("kidsMenu").style.height="200px";
    document.getElementById("kidsMenu").style.marginLeft="30%";

    document.getElementById("kidsMenu1").src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19616642/2022/8/23/0c27b1b6-e3fc-438b-a920-97bb2b61b7701661256313619ATUNGirlsRedBlueStripedJumpsuit1.jpg"
    document.getElementById("kidsMenu1").style.height="200px"
    document.getElementById("kidsMenu2").src="https://images-cdn.ubuy.co.in/63a465d5d0637a46ba518432-girls-dress-elegant-easter-party-dress.jpg"
    document.getElementById("kidsMenu2").style.height="200px"
    document.getElementById("kidsMenu3").src="https://m.media-amazon.com/images/I/71T5FgFMhKL._AC_UY1100_.jpg"
    document.getElementById("kidsMenu3").style.height="200px"

})
kids1.addEventListener("click",()=>{
    document.getElementById("kidsMenu").src="https://assets0.mirraw.com/images/10739405/Baby_Jcd_Wine_Choli_Front_zoom.jpg?1688224726";
    document.getElementById("kidsMenu").style.height="200px"

    document.getElementById("kidsMenu1").src="https://images.meesho.com/images/products/193773712/lipvq_512.webp"
    document.getElementById("kidsMenu1").style.height="200px"
    document.getElementById("kidsMenu2").src="https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acs7139-1-teal-net-girls-lehenga-choli-gl0054.jpg"
    document.getElementById("kidsMenu2").style.height="200px"
    document.getElementById("kidsMenu3").src="https://rukminim2.flixcart.com/image/850/1000/l1b1oy80/kids-lehenga-choli/6/j/g/na-kc-002-shalin-enterprise-original-imagcw87zysmvbum.jpeg?q=20"
    document.getElementById("kidsMenu3").style.height="200px"

})
kids2.addEventListener("click",()=>{
    document.getElementById("kidsMenu").src="https://i.pinimg.com/1200x/8d/2c/da/8d2cda486dbcc66e0f0e552509b20357.jpg";
    document.getElementById("kidsMenu").style.height="200px"

    document.getElementById("kidsMenu1").src="https://www.pinkblueindia.com/media/catalog/product/cache/2de1d3c8e7267fcd3f38924536aad35c/b/o/boys-green-linen-blazer-and-pant-2-pics-clothes-sets-kids_1.jpg"
    document.getElementById("kidsMenu1").style.height="200px"
    document.getElementById("kidsMenu2").src="https://rukminim2.flixcart.com/image/550/650/xif0q/kids-ethnic-set/l/1/1/8-9-years-632-blue-kidzarea-original-imag8nfcgbjz7qzu-bb.jpeg?q=90&crop=false"
    document.getElementById("kidsMenu2").style.height="200px"
    document.getElementById("kidsMenu3").src="https://cdn.fcglcdn.com/brainbees/images/products/300x364/9745797a.webp"
    document.getElementById("kidsMenu3").style.height="200px"

})
kids3.addEventListener("click",()=>{
    document.getElementById("kidsMenu").src="https://rukminim2.flixcart.com/image/550/650/xif0q/kids-ethnic-set/5/y/p/18-24-months-filipkart-bright-garments-bbg201-y-1-bright-original-imaghpnnbzgf4xgu.jpeg?q=90&crop=false";
    document.getElementById("kidsMenu").style.height="200px"

    document.getElementById("kidsMenu1").src="https://i.pinimg.com/736x/20/78/e2/2078e2bb3e6139752ef6fca6cac075f7.jpg"
    document.getElementById("kidsMenu1").style.height="200px"
    document.getElementById("kidsMenu2").src="https://5.imimg.com/data5/TF/CV/QL/SELLER-12241551/boys-stylish-prince-suit-500x500.png"
    document.getElementById("kidsMenu2").style.height="200px"
    document.getElementById("kidsMenu3").src="https://i.pinimg.com/564x/91/0a/6d/910a6dbebe97786741ea9a26d9000aba.jpg"
    document.getElementById("kidsMenu3").style.height="200px"

})
kids4.addEventListener("click",()=>{
    document.getElementById("kidsMenu").src="https://assets.ajio.com/medias/sys_master/root/20230602/KeQO/6479a04a42f9e729d71a4f6a/-473Wx593H-466227875-offwhite-MODEL.jpg";
    document.getElementById("kidsMenu").style.height="200px"

    document.getElementById("kidsMenu1").src="https://assets.ajio.com/medias/sys_master/root/20221008/zM4I/6340c9d0aeb269659c2cff2f/-473Wx593H-463907825-red-MODEL.jpg"
    document.getElementById("kidsMenu1").style.height="200px"
    document.getElementById("kidsMenu2").src="https://assets.ajio.com/medias/sys_master/root/20230821/yhgv/64e37b24afa4cf41f5639d3f/-473Wx593H-469519381-green-MODEL.jpg"
    document.getElementById("kidsMenu2").style.height="200px"
    document.getElementById("kidsMenu3").src="https://assets.ajio.com/medias/sys_master/root/20230710/ggjn/64abef99eebac147fc5fd5e7/-473Wx593H-466345647-pink-MODEL.jpg"
    document.getElementById("kidsMenu3").style.height="200px"

})


const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartIcon = document.querySelector('.cart-icon');
const cartItemsList = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');

let itemCount = 0;
const cartItems = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

cartIcon.addEventListener('click', toggleCart);

function addToCart(event) {
  const product = event.target.closest('.product');
  const productName = product.querySelector('div').textContent;
  const productPrice = parseFloat(product.querySelector('div').textContent.replace('$', ''));

  cartItems.push({ name: productName, price: productPrice });
  itemCount++;
  updateCartCount();
  alert(`${productName} added to cart!`);
  

  
}

function toggleCart() {
  cartItemsList.innerHTML = '';

  if (cartItems.length === 0) {
    cartItemsList.innerHTML = '<p>Your cart is empty</p>';
    cartItemsList.style.color="white";
  } else {
    cartItems.forEach(item => {  1
      const cartItem = document.createElement('li');
      cartItem.textContent = `${item.name} - $${item.price}`;
      cartItemsList.appendChild(cartItem);
    });
  }

  const cart = document.querySelector('.cart');
  cart.classList.toggle('cart-visible');
}

function updateCartCount() {
  cartCount.textContent = itemCount;
  cartCount.style.color="red";
  cartCount.style.fontWeight="bold";

}


