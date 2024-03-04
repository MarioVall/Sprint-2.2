// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {

    for (const item of products) {
        if (item.id === id) {
            let i = cart.findIndex(p => p.id === id)
            if (i != -1) {
                
                cart[i].quantity++;
            }
            else {
                
                cart.push({id: item.id, product: item, quantity: 1});
            }
            break;
        }
    }
    cartCounter();
}



// Exercise 2
function cleanCart() {
    
    cart = [];
    final_cart();
    cartCounter();
}

// Exercise 3
function calculateTotal() {

    let total = 0;
    for (const item in cart) {
        const element = cart[item];
        if (element.subtotalWithDiscount != undefined) {
            total += element.subtotalWithDiscount;
        }
        else {
            const quantity = element.quantity;
            const price = element.product.price;
            total += quantity*price;
        }
    }
    return total;
}

// Exercise 4
function applyPromotionsCart() {

    for (const item of cart) {
        if (item.product.offer && item.quantity >= item.product.offer.number) {
            const discount = item.product.offer.percent/100;
            const price = item.product.price;
            const quantity = item.quantity;
            let priceNoDiscount = price*quantity;
            let amountToDiscount = priceNoDiscount*discount;
            let finalPrice = priceNoDiscount - amountToDiscount;
            item.subtotalWithDiscount = parseFloat(finalPrice.toFixed(2));
        }
    }
}

// Exercise 5
function printCart() {

    var cart_list = document.getElementById('cart_list');
    cart_list.innerHTML = "";

    for (const item of cart) {
        var row = document.createElement('tr');
        var itemHTML = `
            <th scope="row">${item.product.name}</th>
            <td>$${item.product.price}</td>
            <td>${item.quantity}</td>
        `;
        if (item.subtotalWithDiscount != undefined || item.subtotalWithDiscount != null) {
            itemHTML += `<td>$${item.subtotalWithDiscount}</td>`;
        }
        else {
            itemHTML += `<td>$${item.product.price*item.quantity}</td>`;
        }
        row.innerHTML = itemHTML;
        cart_list.appendChild(row);
    }

    var totalPrice = document.getElementById('total_price');
    totalPrice.innerText = calculateTotal();
}

function final_cart() {
    applyPromotionsCart();
    printCart();
}



function cartCounter() {
    let totalItems = 0;
    for (const item of cart) {
        totalItems += item.quantity;
    }

    let countProduct = document.getElementById('count_product');
    countProduct.innerText = totalItems;
}



















