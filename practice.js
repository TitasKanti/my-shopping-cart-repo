//update function
function updateProductNumber(product, price, isIncreasing){
    const numberField = document.getElementById(product + '-number');
    let productNumber = numberField.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    numberField.value = productNumber;

    //update the total
    const purchase = document.getElementById(product + '-total');
    purchase.innerText = productNumber * price;

    //calculate total
    getCalculationSum();
}

//get input value
function getInputValue(product){
    const input = document.getElementById(product);
    const inputNumber = parseInt(input.value);
    return inputNumber;
}
//calculation function
function getCalculationSum(){
    const phoneTotal = getInputValue('phone-number') * 1219;
    const caseTotal = getInputValue('case-number') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const grandTotal = subTotal + tax;

    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = grandTotal;
}

//phone get plus button, add event handler and increasing quantity
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
})

//phone get minus button, add event handler and decreasing quantity
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})

//case get plus button, add event handler and increasing quantity
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
})

//case get minus button, add event handler and decreasing quantity
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})

