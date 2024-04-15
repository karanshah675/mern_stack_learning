function adjective() {
    if((Math.floor(Math.random()*3)+1)==1){
        return "Crazy";
    }else if((Math.floor(Math.random()*3)+1)==2){
        return "Amazing";
    }else{
        return "Fire";
    }
}
function shopName() {
    if((Math.floor(Math.random()*3)+1)==1){
        return " Engine";
    }else if((Math.floor(Math.random()*3)+1)==2){
        return " Foods";
    }else{
        return " Garments";
    }
}
function lastName() {
    if((Math.floor(Math.random()*3)+1)==1){
        return " Bros";
    }else if((Math.floor(Math.random()*3)+1)==2){
        return " Limited";
    }else{
        return " Hub";
    }
}
console.log(adjective()+shopName()+lastName());