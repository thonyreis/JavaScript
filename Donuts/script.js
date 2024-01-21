function updateOrder() {
    const TAXRATE = 0.0925;
    const DONUTPRICE = 0.5;
    var numCakeDonuts = parseInt(document.getElementById("cakedonuts").value);
    var numGlazedDonuts = parseInt(document.getElementById("glazeddonuts").value);
    if (isNaN(numCakeDonuts))
        numCakeDonuts = 0;
    if (isNaN(numGlazedDonuts))
        numGlazedDonuts = 0;
    var subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
    var tax = subTotal * TAXRATE;
    var total = subTotal + tax;
    document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + total.toFixed(2);
}

function placeOrder() {
    //Submite order to server...
    FormData.submit();
}