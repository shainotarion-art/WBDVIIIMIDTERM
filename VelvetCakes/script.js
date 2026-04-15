// =======================
// HERO SLIDER
// =======================

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){
  if(slides.length === 0) return;

  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  index++;
  if(index >= slides.length) index = 0;
}

// auto slide every 3s
setInterval(showSlide, 3000);

// manual dots control
function goTo(n){
  index = n;
  showSlide();
}


// =======================
// FADE-IN PRODUCTS
// =======================

let products = document.querySelectorAll(".product");

function revealProducts(){
  products.forEach(p => {
    let top = p.getBoundingClientRect().top;

    if(top < window.innerHeight - 50){
      p.classList.add("show");
    }
  });
}

// run on scroll
window.addEventListener("scroll", revealProducts);

// run once on load
window.addEventListener("load", revealProducts);


// =======================
// ORDER FLOW
// =======================

function orderNow(page){
  location.href = page;
}

function placeOrder(){
  location.href = "thankyou.html";
}

window.addEventListener("load", () => {
  document.querySelectorAll(".product").forEach(p => {
    p.classList.add("show");
  });
});

let qty = 1;
let price = 99;

function changeQty(val){
  qty += val;
  if(qty < 1) qty = 1;

  document.getElementById("qty").innerText = qty;

  let total = qty * price;
  document.getElementById("total").innerText = "₱" + total + ".00";
  document.getElementById("subtotal").innerText = "₱" + total + ".00";
}