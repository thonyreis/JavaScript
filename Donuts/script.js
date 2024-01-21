function updateOrder() {
    var TAXRATE = 0.0925;
    var DONUTPRICE = 0.50;
    var numCakeDonuts = parseDonuts(document.getElementById("cakedonuts").value);
    var numGlazedDonuts = parseDonuts(document.getElementById("glazeddonuts").value);
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

  function parseDonuts(donutString) {
    numDonuts = parseInt(donutString);
    if (donutString.indexOf("dúzia") != -1)
      numDonuts *= 12;
    return numDonuts;
  }

  function placeOrder(form) {
    if (document.getElementById("name").value == "")
      alert("Você precisa fornecer um nome antes de enviar o pedido");
    else if (document.getElementById("pickupminutes").value == "" ||
      isNaN(document.getElementById("pickupminutes").value))
      alert("Você deve fornecer o número de minutos até a coleta antes de enviar o pedido.");
    else
      // Submit the order to the server
      form.submit();
  }