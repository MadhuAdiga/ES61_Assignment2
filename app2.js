    var myModule= {
        add:function(x,y){
            console.log ("The sum of the two numbers is : " + (x+y));
        },
        sub:function(x,y){
            console.log ("The difference of the two numbers is : " + (x-y));
        },
        multiply:function(x,y){
            console.log ("The product of the two numbers is : " + (x*y));
        },
        square:function(x){
            console.log ("The square of the given number is : " + (x*x));
        }
    };

    myModule.add(4,2);
    myModule.sub(4,2);
    myModule.multiply(4,2);
    myModule.square(4);

    