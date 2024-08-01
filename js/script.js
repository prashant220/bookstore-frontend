import { products,new_books,categories } from './api.js';

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const home = document.getElementById('home');
const shop = document.getElementById('shop');
const mainImg= document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("small-img");
const firstBtn = document.getElementById("firstBtn");
const first = document.getElementById("first");
const secBtn = document.getElementById("secBtn");
const sec = document.getElementById("sec");
const thirdBtn = document.getElementById("thirdBtn");
const third = document.getElementById("third");


//cart
const btn= document.getElementById("btn"); 
const couponIn = document.getElementById("coupon"); 
const totalBtn = document.getElementById("total-btn");
const invalid =document.getElementById("invalid");
const insert = document.getElementById("insert");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const first_price =     document.getElementById("first-price");  
const sec_price =     document.getElementById("sec-price");  
const third_price =     document.getElementById("third-price");  


      // payment
 const Proceed = document.getElementById("Proceed");       
 const redId = document.getElementById("redId");   
 const img= document.getElementById("img");
 //sproduct--ADD to Cart

 const cart_btn = document.getElementById("cart-btn");
 const select_option= document.getElementById("select-option");
 const buy_btn = document.getElementById("buy-btn");
 const first_hero = document.getElementById("first-hero");
 const sec_hero = document.getElementById("sec-hero");




const images = [  "img/hero4.png", "img/b21.jpg"];
let currentIndex = 0;

function changeBackgroundImage() {
    const heroSection = document.getElementById('hero');
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;

    if(currentIndex=='0'){
        heroSection.style.backgroundPosition =  'top 25% right 0';
      
        // sec_hero.innerHTML= `` 
        first_hero.classList.remove('hide'); 
        sec_hero.classList.add('hide'); 
        

    }
    if(currentIndex=='1'){
        heroSection.style.backgroundPosition = 'top -30px right -236px'; 
        sec_hero.classList.remove('hide');
        first_hero.classList.add('hide'); 
    }
    
    currentIndex = (currentIndex + 1) % images.length;

    heroSection.classList.remove('slide');
    void heroSection.offsetWidth; // Trigger reflow
    heroSection.classList.add('slide');
}

  setInterval(changeBackgroundImage, 2500);



const span1 = document.getElementById("span-id1");
const read1= document.getElementById("read1");
const less1= document.getElementById("less1");
const span2 = document.getElementById("span-id2");
const read2= document.getElementById("read2");
const less2= document.getElementById("less2");
const span3 = document.getElementById("span-id3");
const read3= document.getElementById("read3");
const less3= document.getElementById("less3");
const span4 = document.getElementById("span-id4");
const read4= document.getElementById("read4");
const less4= document.getElementById("less4");
const span5 = document.getElementById("span-id5");
const read5= document.getElementById("read5");
const less5= document.getElementById("less5");





const one = document.getElementById("1"); 
const two = document.getElementById("2"); 
const three = document.getElementById("3"); 
const four = document.getElementById("4"); 
const five = document.getElementById("5"); 
const six = document.getElementById("6"); 
const seven = document.getElementById("7"); 
const eight = document.getElementById("8"); 
const ele = document.getElementById("11"); 
const twe = document.getElementById("12"); 
const thir = document.getElementById("13"); 
const twen  = document.getElementById("20"); 
const fourt = document.getElementById("14"); 
const fif = document.getElementById("15"); 
const sixt = document.getElementById("16"); 
const sevent = document.getElementById("17"); 
const eighte = document.getElementById("18"); 
const nine = document.getElementById("19"); 





if(bar){
    bar.addEventListener("click", ()=>{
       nav.classList.add('active');
    })
}

close.addEventListener("click", (e)=>{
    nav.classList.remove('active');
     e.preventDefault();  
}) 

const select_size = document.getElementById("select-size");




if (cart_btn) {
    cart_btn.addEventListener("click", () => {
        // Check selected option

        // Get the current product ID from the URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        // Find the product in the products object
        const product = products[productId] || new_books[productId];
        console.log("pp", product)
        if (product) {
            // Get existing cart items from local storage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product already exists in the cart
            let existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                // If product already exists, increase the quantity
                existingProduct.quantity += 1;
            } else {
                // If product does not exist, add to cart with quantity 1
                cart.push({ ...product, quantity: 1 });
            }

            // Save the updated cart back to local storage
            localStorage.setItem('cart', JSON.stringify(cart));

            console.log('Product added to cart:', product);

            // Display an alert and reload the page
            alert('Product added to cart');
            location.reload();
        } else {
            console.log('Product not found');
        }
    });
}


// buy btn 

if(buy_btn)
 {
    buy_btn.addEventListener("click", ()=>{

        if(select_option.value=='Select Size')
            select_size.classList.remove('hide');
          else{
            //   window.location.href=`payment.html`; 
            select_size.classList.add('hide');
              window.open('payment.html', '_blank');
          }
    })
 }


// sproduct.. changePic mini to main
if(smallImg.length > 0 && mainImg) {
    smallImg[0].addEventListener("click", () => {
        mainImg.src = smallImg[0].src;
    });
    smallImg[1].addEventListener("click", () => {
        mainImg.src = smallImg[1].src;
    });
    smallImg[2].addEventListener("click", () => {
        mainImg.src = smallImg[2].src;
    });
    smallImg[3].addEventListener("click", () => {
        mainImg.src = smallImg[3].src;
    });

} else {
    console.log("addEventListener: Elements not found");
}



// go to sproduct page
// console.log(proImg);
// console.log(proImg[0].src)  
// console.log(proImg[0].children[0].attributes[0].nodeValue)


if(one)
one.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct1.html';  
})
if(ele)
ele.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct11.html';  
})

if(two)
two.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct2.html';  
})

if(twe)
twe.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct12.html';  
})
if(three)
three.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct3.html';  
})

if(four)
four.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct4.html';  
})

if(five)
five.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct5.html';  
})

if(six)
six.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct6.html';  
})

if(seven)
seven.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct7.html';  
})

if(eight)
eight.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct8.html';  
})

if(thir)
thir.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct13.html';  
})

if(fourt)
fourt.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct14.html';  
})

if(fif)
fif.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct15.html';  
})

if(sixt)
sixt.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct16.html';  
})

if(sevent)
sevent.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct17.html';  
})

if(eighte)
eighte.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct18.html';  
})

if(nine)
nine.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct19.html';  
})
if(twen)
twen.addEventListener("click" , (e)=>{
    window.location.href = 'sproduct20.html';  
})

// read more


if(read1)
read1.addEventListener("click",()=>{
      span1.classList.remove("hide"); 
      read1.classList.add('hide');
      less1.classList.remove("hide");

      less1.addEventListener("click", ()=>{
        read1.classList.remove('hide');
        span1.classList.add("hide");
        less1.classList.add('hide');

      })
   })
   
if(read2)
read2.addEventListener("click",()=>{
      span2.classList.remove("hide");
      read2.classList.add('hide');
      less2.classList.remove("hide");

      less2.addEventListener("click", ()=>{
        read2.classList.remove('hide');
        span2.classList.add("hide");
        less2.classList.add('hide');

      })
   })
if(read3)
read3.addEventListener("click",()=>{
      span3.classList.remove("hide");
      read3.classList.add('hide');
      less3.classList.remove("hide");

      less3.addEventListener("click", ()=>{
        read3.classList.remove('hide');
        span3.classList.add("hide");
        less3.classList.add('hide');

      })
   })
if(read4)
read4.addEventListener("click",()=>{
      span4.classList.remove("hide");
      read4.classList.add('hide');
      less4.classList.remove("hide");

      less4.addEventListener("click", ()=>{
        read4.classList.remove('hide');
        span4.classList.add("hide");
        less4.classList.add('hide');

      })
   })
if(read5)
read5.addEventListener("click",()=>{
      span5.classList.remove("hide");
      read5.classList.add('hide');
      less5.classList.remove("hide");

      less5.addEventListener("click", ()=>{
        read5.classList.remove('hide');
        span5.classList.add("hide");
        less5.classList.add('hide');

      })
   })


   // cart /// 

  
function subtotal(){
    
    if(firstBtn)
        firstBtn.addEventListener("click", ()=>{
       let a= confirm("You really want to remove ?") 
        if(a)
           first.classList.add("hide");
          num1.value=0;
           
        })
        if(secBtn)   
            secBtn.addEventListener("click", ()=>{
                let a= confirm("You really want to remove ?") 
                if(a)
            sec.classList.add("hide");
        num2.value=0;
            })
        if(thirdBtn)   
            thirdBtn.addEventListener("click", ()=>{
                let a= confirm("You really want to remove ?") 
                if(a)
                third.classList.add("hide"); 
              num3.value=0;
            })

        }


subtotal();

let enter_coupon =document.getElementById("enter-coupon");

if(btn) {
btn.addEventListener("click" , ()=>{
 const coup = couponIn.value.trim();
if(coup==""){
    enter_coupon.classList.remove('hide'); 
    invalid.classList.add('hide');
    console.log("hit coupon")
    // alert(" Please Enter Coupon first!"); 
}

else{
invalid.classList.remove('hide'); 
enter_coupon.classList.add('hide');
 couponIn.value=""; 
}
});  
} 

var total=0;


//cart


document.addEventListener('DOMContentLoaded', () => {
    populateCart();
    updateCartCount();
});

function populateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = ''; // Clear any existing items

    cart.forEach(item => {
        const itemPrice = parseFloat(item.price.replace('$', ''));
        const row = document.createElement('tr');
        row.id = item.id;

        row.innerHTML = `
            <td><i class="fa-solid fa-trash remove-btn" data-id="${item.id}"></i></td>
            <td><img src="${item.image}" alt="${item.title}"></td>
            <td>${item.title}</td>
            <td>$${itemPrice.toFixed(2)}</td>
            <td><input type="number" min="1" value="${item.quantity}" data-id="${item.id}"></td>
        `;

        cartItemsContainer.appendChild(row);
    });

    addEventListeners(); // Add event listeners for remove and quantity changes
}

function addEventListeners() {
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            removeFromCart(productId);
        });
    });

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('change', (e) => {
            const productId = e.target.dataset.id;
            const newQuantity = parseInt(e.target.value, 10);
            updateCartQuantity(productId, newQuantity);
        });
    });
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    populateCart(); // Refresh the cart display
}

function updateCartQuantity(productId, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.map(item => {
        if (item.id === productId) {
            item.quantity = newQuantity;
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

function calculateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalQuantity = 0;
    let totalAmount = 0;

    cart.forEach(item => {
        const itemPrice = parseFloat(item.price.replace('$', ''));
        totalQuantity += item.quantity;
        totalAmount += itemPrice * item.quantity;
    });
     
    const insert = document.getElementById('insert');
    insert.classList.add("cart-total")
    console.log(insert)
    insert.classList.remove('hide');
    insert.innerHTML = `
        <div>
            <h2>Cart Total</h2>
            <table>
                <tr>
                    <td>Quantity</td>
                    <td>${totalQuantity}</td>
                </tr> 
                <tr>
                    <td>Amount</td>
                    <td>$${totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td style="color:black;"><b>Total</b></td>
                    <td style="font-weight: 500; color:black;">$${totalAmount.toFixed(2)}</td>
                </tr>
            </table>
            <a href="payment.html" target="_blank">
                <button id="Proceed">Proceed to Pay</button>
            </a>
            <br><br><br>
            <span id="redId" class="hide" style="color: red;">Add some items before proceeding</span>  
        </div>`;
}

if (totalBtn) {
    totalBtn.addEventListener('click', () => {
        calculateTotal();
    });
}

function getCartItemCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    return cartItems.length;
}

function updateCartCount() {
    const cartCount = getCartItemCount();
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('mobile-cart-count').textContent = cartCount;
}
