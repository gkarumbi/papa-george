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

/*    SIZE: RADIO BUTTONS FUNCTIONALITY FOR PERI PERI CHICKEN */

$("#perismall").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Peri Peri Chicken</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#perimedium").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Peri Peri Chicken</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#perilarge").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Peri Peri Chicken</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: RADIO BUTTONS FUNCTIONALITY FOR PERI PERI CHICKEN*/
$("#pericrispy").click(function(){

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
$("#peristuffed").click(function(){

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
$("#periglutenfree").click(function(){

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

/* TOPPINGS:RADIO BUTTONS FUNCTIONALITY FOR PERI PERI CHICKEN */
$("#pericheese").click(function(){

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
$("#periham").click(function(){

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
$("#periolives").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Olives</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/*    SIZE: RADIO BUTTONS FUNCTIONALITY FOR HAWAIIAN PIZZA */

$("#hawaismall").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Hawaiian</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#hawaimedium").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Hawaiian</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#hawailarge").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Hawaiian</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: RADIO BUTTONS FUNCTIONALITY FOR HAWAIIAN*/
$("#hawaicrispy").click(function(){

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
$("#hawaistuffed").click(function(){

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
$("#hawaiglutenfree").click(function(){

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

/* TOPPINGS:RADIO BUTTONS FUNCTIONALITY FOR HAWAIIAN PIZZA */
$("#hawaicheese").click(function(){

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
$("#hawaiham").click(function(){

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
$("#hawaiolives").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Olives</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/*    SIZE: RADIO BUTTONS FUNCTIONALITY FOR VEGGE TIKKA PIZZA */

$("#veggesmall").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Vegge Tikka</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#veggemedium").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Vegge Tikka</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#veggelarge").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Vegge Tikka</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: RADIO BUTTONS FUNCTIONALITY FOR VEGGE TIKKA*/
$("#veggecrispy").click(function(){

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
$("#veggestuffed").click(function(){

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
$("#veggeglutenfree").click(function(){

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

/* TOPPINGS:RADIO BUTTONS FUNCTIONALITY FOR VEGGE TIKKA */
$("#veggecheese").click(function(){

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
$("#veggeham").click(function(){

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
$("#veggeolives").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Olives</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});


/*    SIZE: RADIO BUTTONS FUNCTIONALITY FOR MEAT DELUXE */

$("#meatsmall").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Meat Deluxe</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#meatmedium").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Meat Deluxe</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#meatlarge").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Meat Deluxe</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: RADIO BUTTONS FUNCTIONALITY FOR MEAT DELUXE*/
$("#meatcrispy").click(function(){

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
$("#meatstuffed").click(function(){

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
$("#meatglutenfree").click(function(){

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

/* TOPPINGS:RADIO BUTTONS FUNCTIONALITY FOR MEAT DELUXE */
$("#meatcheese").click(function(){

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
$("#meatham").click(function(){

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
$("#meatolives").click(function(){

    var radioValue = $(this).val();
    if(radioValue){
        console.log(radioValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Olives</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

   
 
  var calculatePizzaTotal = function (){
        var sum =0;
        $("ul").each(function(){
            
             $(this).find(".order-item-price").each(function(){
                // console.log($(this).text());
                sum += parseInt($(this).text());
             });
            
        });
        return sum;
    
 } 

 var calculateCrustTotal = function(){
     var sum =0;
     $("ul").each(function(){
            
        $(this).find(".crust-item-price").each(function(){
           // console.log($(this).text());
           sum += parseInt($(this).text());
        });
       
   });
   return sum;
 }

 var calculateToppingTotal = function(){
    var sum =0;
    $("ul").each(function(){
           
       $(this).find(".topping-item-price").each(function(){
          // console.log($(this).text());
          sum += parseInt($(this).text());
       });
      
  });
  return sum;
}

function  showTotalAmount(){
    totalOrderAmount = calculateToppingTotal() + calculatePizzaTotal() + calculateCrustTotal();
    console.log(totalOrderAmount);

    $(".sum-price span").text(totalOrderAmount);
}


 $(".ordernow-button a").click(function(){
     
    showTotalAmount(); 
    
    
});





});