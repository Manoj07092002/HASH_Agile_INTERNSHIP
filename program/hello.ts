// PROGRAM FOR 1ST ROUND ---HASH_Agile INTERN


let a: string = "abcdef";
let b: number = 2;
let c: number = a.length;
let rotatedStr: string = "";
b = b % c;


for (let i = b; i < c; i++) {
    rotatedStr += a[i];
}

for (let i = 0; i < b; i++) {
    rotatedStr += a[i];
}


console.log(rotatedStr);  
