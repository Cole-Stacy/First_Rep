function loveCalculator(){
    person1 = prompt("what is the name of the first person?");
    person2 = prompt("Name of Second Person");

    lovecal=RandomNumber(100);
    if (lovecal === 100){
        alert("You have a " + lovecal +"% chance of Falling in Love, You both are going to make it");
    } 
    if (lovecal>=75 && lovecal < 100){
        alert("You have a " + lovecal +"% chance of Falling in Love...you might make it.");
    }
    if (lovecal>=50 && lovecal < 75){
        alert("You have a " + lovecal +"% chance of Falling in Love....a probably not going to make it");
    } else{
        alert("You have a " + lovecal +"% chance of Falling in Love...not going to make it.");
    }
    
    
    
}

function RandomNumber (number){
    multiplier = Math.random();
    adjustment = Math.floor(number*multiplier)+1;
    return adjustment;
}

//loveCalculator()
