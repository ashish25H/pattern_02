let n = 10;
let str = "";

for(let i=0; i<=n; i++){
    for(let j=0; j<=n*2; j++){
        if(j===(n-i) || j===(n+i) || (i===(Math.floor(n/2))&& (j>=5 && j<=15))){
            str += "*";
        }else{
            str += " ";
        }
    }
    str += "\n";
}

console.log(str);