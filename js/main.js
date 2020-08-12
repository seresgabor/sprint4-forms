function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    calcSubtotalPrice(price, amountNumber);
}

function calcSubtotalPrice(price, amountNumber) {
    if (amountNumber > 10) {
        alert ("Maximum 10 terméket vásárolhat!");
    } else if ( amountNumber < 1 ) {
        alert ("Minimum 1 terméket kell vásárolnia!");
    } else {
        let subtotal = amountNumber * price;
        let delivery = 500;   

        calcTotalPrice(delivery, subtotal);
    }
}

function calcTotalPrice(delivery, subtotal) {
    let showTotal = document.querySelector("span.total-price");
    let total = subtotal;
    if (subtotal < 5000) {
        total = delivery + subtotal;
        alert ("5000 Ft alatt 500 Ft kiszállítási díjat számítunk fel!");
    } else {
        alert ("5000 Ft-tól a kiszállítás díjmentes!");
    }
    showTotal.innerHTML = total;
        
}

// Add helptext.
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

// parent.removeChild(helpText);

// Window events
let sendButton = document.querySelector("form .btn.btn-primary");
/* 
sendButton.onclick = function() {
    alert("Hello JS");
} 
*/

sendButton.addEventListener("click", function() {
    alert("Hello JS");
});

window.addEventListener("resize", function(){
    console.log(this.innerHeight, this.innerWidth);
});

// Űrlap események.

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i=0; i<inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
});
