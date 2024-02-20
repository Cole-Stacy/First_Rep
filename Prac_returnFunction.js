function getMilk(starting_money,cost_per_bottle){
    return starting_money % cost_per_bottle
}

change = getMilk(1000, 3.68)
console.log(change)
