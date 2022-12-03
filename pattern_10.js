//          *
//          *
//          *
//          *
//  * * * * * * * * *
//          *
//          *
//          *
//          *

let str = "";

for(let i=0; i<=8; i++){
    for(let j=0; j<=8; j++){
        if(i===4 || j===4){
            str += "* ";
        }else{
            str += "  ";
        }
    }
    str += "\n";
}

console.log(str);