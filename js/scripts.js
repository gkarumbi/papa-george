//Backend Logic
//Create  Objects and their properties

var sizes ={ small: 500,
    medium : 650,
    large : 800
};

var toppings = {
    ham: 50,
    olives : 100,
    cheese : 150
};

var crust ={
    crispy : 80,
    stuffed :140,
    gluttenFree : 200
};

//create Pizza Object and add its properies
class Pizza {
    constructor(pizzaSizes, pizzaToppings, pizzaCrust) {
        this.pizzaSizes = pizzaSizes;
        this.pizzaToppings = pizzaToppings;
        this.pizzaCrust = pizzaCrust;
    }
}

var newPizza = new Pizza(sizes,toppings,crust);

console.log(newPizza.pizzaSizes.small);
console.log(newPizza.pizzaToppings.cheese);
console.log(newPizza.pizzaCrust.crispy);

