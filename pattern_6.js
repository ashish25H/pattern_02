// * * *   
// *     *
// *     *
// *     *
// *     *
// *     *
// *     *
// * * *

let str = "";

for(let i=0; i<=7; i++){
    for(let j=0; j<=3; j++){
        if((i===0 && j!==3) || (i===7 && j!==3) || j===0 || (j===3 && (i!==0 && i!==7))){
            str += "* ";
        }else{
            str += "  ";
        }
    }
    str += "\n";
}

console.log(str);
