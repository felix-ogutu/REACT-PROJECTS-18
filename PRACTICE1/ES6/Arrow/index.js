hello=function(){
    return "Hello World";
}
console.log(hello());

//With the arrow function
//arrow function return value by Default
//If the function has only one statement, and the statement returns a value
//you can remove the brackets and the return keyword:


hello =()=>"Hello World";
console.log(hello());

//arrow function with Parameters
//If you have parameters, you pass them inside the parentheses:

hello=(alert)=>"Hello" + alert;
console.log(hello("World"));

//before the arrow function
hello=function(alert){
    return "Hello "+ alert;
}

console.log(hello("World"));

//Arrow function without Parentheses
hello=alert=>"Hello" +  alert;
console.log(hello("World"));



