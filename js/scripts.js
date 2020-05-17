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

/* class UI{
    constructor(){
        this.pizzaContainer = document.getElement
    }
} */

//Front-end Logic

$(document).ready(function(){
    $('.pizza-container').click(function(event){
        /* if(event.cur){

        } */
        /* var target =$(event.target);
        if(target.is('input')){
            console.log(target.val());

        } */
        $("input[type='radio']").click(function(){
            var pizzaradioValue =  $("input[name='pizza']:checked").val();
            console.log(pizzaradioValue);
            if(pizzaradioValue == "smallpizza"){

            } else if(pizzaradioValue == "mediumpizza"){

            } else if(pizzaradioValue =="largepizza"){

            }
        });
        $("input[type='radio']").click(function(){
            var crustradioValue =  $("input[name='crust']:checked").val();
            console.log(crustradioValue);
        });
        $("input[type='checkbox']").click(function(){
            var toppingsradioValue =  $("input[name='toppings']:checked").val();
            console.log(toppingsradioValue);
        });
             
             
                
       
    });
});