function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showTotalPrice(price, amountNumber);
}

function showTotalPrice(price=1000, amountNumber=1) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert ("Maximum 10 terméket vásárolhat!");
    } else if ( amountNumber < 1 ) {
        alert ("Minimum 1 terméket kell vásárolnia!");
    } else {
        let total = amountNumber * price;
        showAmount.innerHTML = total;
    }
}


