var output = [];
function fizzbuzz(){
    x=output.length+1
    if (x%3===0 && x%5!==0){
        output.push("fizz")
    } else if (x%5===0 && x%3!==0){
        output.push("Buzz")
    } else if (x%3===0 && x%5===0){
        output.push("FizzBuzz")
    } else {
        output.push(x)
    }
    
    console.log (output)
}
