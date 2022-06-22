
window.onload = function dataJSON() {
    const requestURL = 'https://bysandiazz.github.io/website-appleproductsshop/data/products.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function requestOnload() {
        productsRequest = request.response; //CONSTANTE PUBLICA (NO SE USA LET, VAR O CONST, SE DEJA SOLA POR LO QUE ES PUBLICA)
        insertInDOM(productsRequest);
    }
}


function insertInDOM(jsonObject) {
    const lista = document.querySelector('#products-container');
    
    const products = jsonObject['products'];

    for(let i=0; i<products.length; i++){

        let name = products[i].name;
        let price = products[i].price;
        let specs = products[i].specs;


        let print = "";
        print += 
            '<div class="product-container" id="product'+i+'" onMouseEnter="changeCtaIcon('+i+')" onMouseLeave="returnCtaIcon('+i+')">'+            
                '<img src="./images/images-products/'+name+'.png" alt="Iphone 13" class="product-img">'+
                '<h3 class="product-title">'+name+'</h3>'

        for(let j=0; j<specs.length; j++){
            const specsAux = specs[j];
            print += '<p class="product-subtitle">'+specsAux+'</p>'

        }  

        print += 
            '<div class="price-container">'+
                '<h2 class="product-price">'+price+' $</h2>'+
                '<button class="product-cta" id="add'+i+'" onClick="addCart('+i+')"><img src="./images/6-shopping-outline.png" class="cta-img"  id="cta-img'+i+'"></button>'+
            '</div>'+
        '</div>'

        console.log(print);
        lista.innerHTML += print;

    }    
}

let itemArray = [];
let cant = 0;
let j = 0;

function addCart(productID){
    console.log(productID);

    const products = productsRequest['products'];

    for(let i=0; i<products.length; i++){
        if(i === productID){
            console.log("COMPRANDO "+ products[i].name);
            const name = products[i].name;
            const price = products[i].price;

            itemArray.push(name+" - "+price+" $");
            console.log(itemArray);
            
            const cart_container = document.querySelector(".cart-list");

            cant = cant + 1;
            
            cart_container.innerHTML += '<div class="cart-item" id="cart-item-'+j+'"><p class="name">'+(cant)+'. '+name+' </p><p class="price">'+price+' $</p></div>' 

            cartCheck(i);

            totalPrice(price);

            cartCant = document.querySelector('#cart-cant');
            cartCant.textContent = cant;
        }
    }
}

function removeCart(){
    const item = document.querySelector('.cart-list');
    item.innerHTML = "";
    cant = 0
    totalPriceToZero();
    itemArray = [];
    cartCant.textContent = cant;
}

let total = 0;

function totalPrice(number){
    console.log(number);
    total = total + number;
    const price_container = document.querySelector('.total'); 
    price_container.innerHTML = '<h3 class="total">Total: '+total+' $</h3>'
}

function totalPriceToZero(){
    const price_container = document.querySelector('.total'); 
    price_container.innerHTML = '<h3 class="total">Total: 0$</h3>'
}

function buy(){
    const cartCant = itemArray.length;
    let itemsCart = "Compra: ";
    for(let i=0; i<cartCant; i++){
        itemsCart += itemArray[i] + " / "
    }
    finalBuyCart = itemsCart + "Total: " + total + "$"
    finalBuyCart = finalBuyCart.replaceAll(" ","%20");
    window.open('https://api.whatsapp.com/send?phone=+584244492896&text='+finalBuyCart);
}

function openCart(){
    const cart_container = document.querySelector(".cart-container");
    cart_container.classList.add("show-cart-container");
}

function closeCart(){
    const cart_container = document.querySelector(".cart-container");
    cart_container.classList.remove("show-cart-container");
}


