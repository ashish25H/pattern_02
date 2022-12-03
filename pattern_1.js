// *******
// *     *
// *     *
// *     *
// *     *
// *     *
// *******



let str = "";
let n = 6;

for(let i=0; i<=n; i++){
    for(let j=0; j<=n; j++){
        if(i===0 || i===n || j===0 || j===n){
            str += "*";
        }else{
            str += " ";
        }
    }
    str += "\n";
}

console.log(str);

