function add(num1,num2) {
    //Properties
    console.log(arguments.callee) //It's returnts which function we will use
    
    var sum = 0;
    for(var i=0; i<=arguments.length;i++){
        sum += arguments[i]
       
    }
    return sum
}
console.log(add(10,20,30,5))