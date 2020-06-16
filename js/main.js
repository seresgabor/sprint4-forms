function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let total = parseInt(amountInput.value) * price;
    showAmount.innerHTML = total;
}

