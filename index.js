//Question-1
let sum=(a,b)=>a+b;
//Question-2
let greet = (name) => `Hello, ${name}!`;
console.log(greet("Bhargav"));
//Question-3
let isEven=num=>num%2==0
console.log(isEven(7));
//Question-4
let num=num=>num>10
console.log(num(7));
//Question-5
let compare=(string1,string2)=>{
    if(string1.length>string2.length){
        return string1
    }
    else if(string1.length<string2.length){
        return string2
    }
    else if(string1.length==string2.length){
        return "Equal Length"
    }
}
let res=compare('Res','yiuo');
console.log(res);