document.write("<h2> Question No 1 </h2>")
let number=[1,2,3,4,5,6,7,8,9,10,15];
for(let i=0;i<number.length;i++){
    if(number[i] % 5 ===0 && number[i] % 3 ===0){
        number[i]="ThreeFive"
    }
    else if(number[i] % 5 ===0){
        number[i]="Five"
    }
    else if(number[i] % 3 ===0){
        number[i]="Three"
    }
    
}
document.write("Output"+" "+number);