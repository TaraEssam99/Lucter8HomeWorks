//  functionsاوجد مفكوك 5 اعداد عشوائية واضافة ناتج العملية الى مصفوفة باستخدام ال 
 
function fac (num){
    let k=1;
    for(let i=num ; i>=1 ; i--){
        k=k*i;
    }
    return k;
}


var array = [];
var fact =[];

for( let i=1 ; i<=5 ; i++ ){

    let x= Math.floor(Math.random() * 10);
    array.push(x);
    let f = fac(x);
    fact.push(f);
}

console.log(`the number are: ${array}`);
console.log(` the factorial: ${fact}`);