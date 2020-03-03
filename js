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