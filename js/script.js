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
  

  