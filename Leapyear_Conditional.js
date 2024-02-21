function isLeapyear(year){
    if (year % 4 !==0){
        console.log("Not a Leap Year")
    } else if (year % 100 !==0){
        console.log("Leap Year")
    } else if (year % 400 !== 0){
        console.log("Not a Leap Year")
    } else {
        console.log("Leap Year")
    }
}

//isLeapyear(2000)
