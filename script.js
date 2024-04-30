alert("WELCOME TO THE TEXTILES WORLD");
let user=prompt("Enter your name");
let passWord=prompt("Enter your password");
let myPass = passWord;
if (myPass.toLowerCase()==user.toLowerCase()){
    alert("CONGRATULATION AS GOOD CUSTOMER TO BE HERE WITH");
    console.log("CONGRATULAION AS GOOD CUSTOMER TO BE HERE WITH")
    
}
else {
    alert("You have entered an Invalid PassWord")
}


// In  a mall 10% off announced on different prices of items 250,645,300,900,60
// solution

// EXAMPLE 1 BY FOR OF LOOP

let price = [ 250,645,300,900,60 ];

let i = 0;
for (let val of price){
    document.write(`value at index ${i} = ${val}`,"<br>");
    let offer = val / 10;
    price[i] = price[i] - offer;
    document.write(`The prices of each items in the list after offer is =${price[i]}`,"<br>");
    i++
 }

 let a=5;b=2;

console.log("a=",a,  "& b=",b,);
console.log('a+b='  ,a+b );
console.log("a-b=",a-b);
console.log("a * b =",a * b);
console.log("a / b=",a / b);
console.log("a % b=",a % b);
console.log("a ** b=", a**b);

//now we read post-increment and pre-increment

console.log("++a - ++b=",++a - ++b);
console.log("a=",a,  "& b=",b,);
console.log("++a + ++b=",++a + ++b);
console.log("a=",a,  "& b=",b,);
console.log("++a + ++b=",++a + ++b);

