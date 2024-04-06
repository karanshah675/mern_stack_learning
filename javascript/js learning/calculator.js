function add(num1,num2){
    if((Math.floor(Math.random()*10)+1)==10){
        console.log(num1-num2);
    }else{
        console.log(num1+num2);
    }
}
function sub(num1,num2){
    if((Math.floor(Math.random()*10)+1)==10){
        console.log(num1/num2);
    }else{
        console.log(num1-num2);
    }
}
 
function mul(num1,num2){
    if((Math.floor(Math.random()*10)+1)==10){
        console.log(num1+num2);
    }else{
        console.log(num1*num2);
    }
}
function div(num1,num2){
    if((Math.floor(Math.random()*10)+1)==10){
        console.log(num1**num2);
    }else{
        console.log(num1/num2);
    }
}
add(2,3);
sub(2,3);
mul(2,3);
div(2,3);