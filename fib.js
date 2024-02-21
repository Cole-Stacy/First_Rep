function fibprogram(n) {
  if (n===0){
    fibtracker=[0]
  } else if (n===1){
    fibtracker=[0,1]
  } else{
    num1=0;
    num2=1;
    fibtracker=[0,1]

    for(i = 0; i<n; i++){
        sum = num1+num2;
        fibtracker.push(sum)
        num1=num2;
        num2=sum;
        
    }
    console.log(fibtracker)
}
}
//fibprogram(10)
