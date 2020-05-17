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

var targetName = function(){
    var target =$(event.target);
    if(target.is('h4')){
       // console.log(target.html());
        targetname = target.html();

    } 

    return targetname;

}


$(document).ready(function(){

    /*    SIZE: RADIO BUTTONS FUNCTIONALITY FOR CHICKEN SUPREME */

    $("#supremesmall").click(function(){

        var radioValue = $(this).val();
        if(radioValue){
            console.log(radioValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="order-number">' +
               
              ' <div class="order-names">' +
                  '<h6><span class="order-name card-title">Chicken Supreme</span></h6>' +
                   '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

              ' </div>'+
              ' <div class="order-price">' +
                  ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#suprememedium").click(function(){

        var radioValue = $(this).val();
        if(radioValue){
            console.log(radioValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="order-number">' +
               
              ' <div class="order-names">' +
                  '<h6><span class="order-name card-title">Chicken Supreme</span></h6>' +
                   '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

              ' </div>'+
              ' <div class="order-price">' +
                  ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#supremelarge").click(function(){

        var radioValue = $(this).val();
        if(radioValue){
            console.log(radioValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="order-number">' +
               
              ' <div class="order-names">' +
                  '<h6><span class="order-name card-title">Chicken Supreme</span></h6>' +
                   '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

              ' </div>'+
              ' <div class="order-price">' +
                  ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });

    /* CRUST: RADIO BUTTONS FUNCTIONALITY FOR CHICKEN SUPREME*/
    $("#supremecrispy").click(function(){

        var radioValue = $(this).val();
        if(radioValue){
            console.log(radioValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="crust-number">' +
               
              ' <div class="crust-names">' +
                  '<h6><span class="crust-name card-title">Crispy Crust</span></h6>' +
                   

              ' </div>'+
              ' <div class="crust-price">' +
                  ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.crispy+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#supremestuffed").click(function(){

        var radioValue = $(this).val();
        if(radioValue){
            console.log(radioValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="crust-number">' +
               
              ' <div class="crust-names">' +
                  '<h6><span class="crust-name card-title">Stuffed Crust</span></h6>' +
                   

              ' </div>'+
              ' <div class="crust-price">' +
                  ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.stuffed+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#supremeglutenfree").click(function(){

        var radioValue = $(this).val();
        if(radioValue){
            console.log(radioValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="crust-number">' +
               
              ' <div class="crust-names">' +
                  '<h6><span class="crust-name card-title">Gluten-Free Crust</span></h6>' +
                   

              ' </div>'+
              ' <div class="crust-price">' +
                  ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.gluttenFree+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });

    /* TOPPINGS:RADIO BUTTONS FUNCTIONALITY FOR CHICKEN SUPREME */
    $("#supremecheese").click(function(){

        var radioValue = $(this).val();
        if(radioValue){
            console.log(radioValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="topping-number">' +
               
              ' <div class="topping-names">' +
                  '<h6><span class="topping-name card-title">Cheese</span></h6>' +
                   

              ' </div>'+
              ' <div class="topping-price">' +
                  ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.cheese+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#supremeham").click(function(){

        var radioValue = $(this).val();
        if(radioValue){
            console.log(radioValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="topping-number">' +
               
              ' <div class="topping-names">' +
                  '<h6><span class="topping-name card-title">Ham</span></h6>' +
                   

              ' </div>'+
              ' <div class="topping-price">' +
                  ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.ham+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#supremeolives").click(function(){

        var radioValue = $(this).val();
        if(radioValue){
            console.log(radioValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="topping-number">' +
               
              ' <div class="topping-names">' +
                  '<h6><span class="topping-name card-title">Cheese</span></h6>' +
                   

              ' </div>'+
              ' <div class="topping-price">' +
                  ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });

    
   /*    SIZE: RADIO BUTTONS FUNCTIONALITY FOR BBQ STEAK */

   $("#bbqsmall").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">BBQ Steak</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqmedium").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">BBQ Steak</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqlarge").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">BBQ Large</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: RADIO BUTTONS FUNCTIONALITY FOR BBQ STEAK*/
$("#bbqcrispy").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Crispy Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.crispy+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqstuffed").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Stuffed Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.stuffed+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqglutenfree").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Gluten-Free Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.gluttenFree+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* TOPPINGS:RADIO BUTTONS FUNCTIONALITY FOR BBQ STEAK */
$("#bbqcheese").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Cheese</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.cheese+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqham").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Ham</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.ham+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqolives").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Cheese</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});















    $('.pizza-container').click(function(event){
               

      /*   var pizzaname = targetName();
        console.log(pizzaname); */
        

        
        /* $("input[type='radio']").on('click',function(){
            
            
            //var pizzaradioValue =  $("input[name='pizza']:checked").val();
            var pizzaradioValue =  $(this).is("input[value='smallpizza']");
           // console.log(pizzaradioValue);
           //console.log($();
          else if(pizzaradioValue == "mediumpizza"){
                console.log(newPizza.pizzaSizes.medium);

            } else if(pizzaradioValue =="largepizza"){
                console.log(newPizza.pizzaSizes.large);

            }
        }); */

        // $("input[type='radio']").click(function(){
        //     var crustradioValue =  $("input[name='crust']:checked").val();
        //     console.log(crustradioValue);
        // });

        $("input[type='checkbox']").click(function(){
            var toppingsradioValue =  $("input[name='toppings']:checked").val();
            console.log(toppingsradioValue);
        });
             
             
                
       
    });
});