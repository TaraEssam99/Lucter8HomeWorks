// 3. اذا كان لديك هذه المصفوفة
// arr = [1,2,3,4,55,66,53,2,1,2]
// اكتب سكربت لايجاد :
// 1)   الارقام 4 و 5
// 2)  اﻻرقام التي اكبر من 4
// 3) اﻻرقام التي تقبل القسمة على 5

let arr = [1, 2, 3, 4, 55, 66, 53, 2, 1, 2];


let findnum = function( element ,index , theArray ){
    return element == 5 || element == 4;
}


let over4 = function( element ,index , theArray ){
    return element > 4;
}
// this function will return ONLY the first value that match 
let mod5 = function( element ,index , theArray ){
    return element % 5 == 0 ;
}
console.log("using find() function")
console.log(arr.find(findnum));
console.log(arr.find(over4));
console.log(arr.find(mod5));

// this function will return ALL the values that match 
let overNum4 = arr.filter(function(value){
    return value > 4 ;
}
);
let modeNum5 = arr.filter(function(value){
    return value % 5 == 0 ;
}
);
console.log("using filter() function")
console.log(overNum4);
console.log(modeNum5);