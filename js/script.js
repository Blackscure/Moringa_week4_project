// DATA COLLECTION FROM THE ORDER FORM
var pizzaSize, crust, toppings, subTotalPrice

function Order(pizzaSize, crust, toppings, subTotalPrice){

  this.size = pizzaSize;
  this.crust = crust;
  this.toppings = toppings;
  this.subTotalPrice =subTotalPrice;
}

/* Order Online Button */

$(document).ready(function(event){
    $("#orderNow").click(function(){
      $("#orderForm").show();
    });
  });
  
  /* add to cart button */
$(document).ready(function(event){
    $("#addToCart").click(function(){
      var pizzaSize = $("#pizzaSizeSelected").val();
      var crust = $("#pizzaCrustSelected").val();
      var toppings = $("#toppingSelected").val();
      var delivery = $("#deliveryOptionSelected").val();

      if((pizzaSize == "0") || (crust == "0") || (toppings == "0") || delivery == "0"){
        alert("Please fill in all required fields!");
      } else {
       $("#itemsCart").show();
     };