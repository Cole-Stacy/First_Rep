function loveCalculator(){
    person1 = prompt("what is the name of the first person?");
    person2 = prompt("Name of Second Person");

    lovecal=RandomNumber(100);
    alert("You have a " + lovecal +"% chance of Falling in Love");
    
}

function RandomNumber (number){
    multiplier = Math.random();
    adjustment = Math.floor(number*multiplier)+1;
    return adjustment;
}

//loveCalculator()
