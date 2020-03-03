<div class="container">
        <div id="order">
            <hr>
            <form>
                <label>Pizza Size:</label>
                <select class="form-control" id="size">
                    <option>SELECT PIZZA SIZE </option><br>
                    <option value="Mega">MEGA KSH 1000</option>
                    <option value="Large">LARGE KSH 600</option>
                    <option value="Medium">MEDIUM KSH 500</option>
                    <option value="Small">SMALL KSH 300 </option>
                </select><br><br>
                <label>Pizza Crust:</label>
                <select class="form-control" id="crust">
                    <option>SELECT CRUST </option><br>
                    <option value="Thick">THICK </option>
                    <option value="Stuffed">STUFFED </option>
                    <option value="Thin">THIN </option>
                     <option value="Deep">DEEP </option>
                </select><br><br>
                 <label>Pizza Topping;</label>
                <select class="form-control" id="topping">
                    <option>SELECT PIZZA TOPPING </option><br>
                    <option value="Pepperoni">PEPPERONI </option>
                    <option value="Sausage">SAUSAGE </option>
                    <option value="Mushrooms">MUSHROOMS </option>
                     <option value="Onions">ONIONS </option>

                </select><br><br>
                  <input type="submit" class="btn btn-warning btn-rounded waves-effect btn-lg" id="totalCost"
                value="Check Out!!!">
            </form>
             <div id="textPrice">
                <P id="tc">Total Cost</P>
            </div>
            <button id="delivery" type="button" class="btn btn-warning btn-rounded waves-effect btn-lg">Delivery</button>
9:16
var totalCosts = [];
function order(size, crust, Topping,){
    this.size = size;
    this.crust = crust;
    this.Topping = Topping;
    this.price = 0;
}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaTopping = ["Peperonni", "Sausage", "Chicken",];
order.prototype.cost = function(){
    if (this.size === pizzaSize[0]){
        this.price += 300;
    }
    else if (this.size === pizzaSize[1]){
        this.price += 500;
    }
    else if (this.size === pizzaSize[2]){
        this.price += 600;
    }
    if (this.crust === pizzaCrust[0]){
        this.price += 100;
    }
    else if (this.crust === pizzaCrust[1]){
        this.price += 130;
    }
    else if (this.crust === pizzaCrust[2]){
        this.price += 150;
    }
    if (this.Topping === pizzaTopping[0]){
        this.price += 100;
    }
    else if (this.Topping === pizzaTopping[1]){
        this.price += 100;
    }
    else if (this.Topping === pizzaTopping[2]){
        this.price += 100;
    }
    return this.price;
    }
order.prototype.totalCost = function(){
    var orderTotal = 0;
    for(var order =0; order < totalCosts.length; order++){
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}
$(document).ready(function () {
    $("input#totalCost").click(function (event) {
        event.preventDefault();
        var sizes = $("select#size").val();
        var crusts = $("select#crust").val();
        var Toppings = $("select#topping").val();
        var newPizzaOrder = new order(sizes, crusts, Toppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);
        $("#tc").text(newPizzaOrder.totalCost());
    });
});
$(document).ready(function () {
  $("#totalCost").click(function () {
      alert("Thank you for Your Purchase!")
  });
});
$(document).ready(function () {
    $("#delivery").click(function () {
        prompt("Name")
        prompt("Location")
        alert("Thank you for Your Purchase!Your order will be delivered to your location")
    });
});
