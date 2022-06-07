// 2. باستخدام الدوال اوجد اﻻعداد الزوجية والفردية وادخل الرقم في حال كان الزوجي الى مصفوفة واذا كان فردي ادخله بمصفوفة اخرى
// * الدالة تستقبل الرقم وترجع true اذا كان الرقم زوجي و false  اذا كان الرقم فردي 

function test (x){
    if (x%2 == 0)
      return true;
    else
      return false;
  }
  
  var even=[];
  var odd=[];
  var array=[0,1,2,3,4,5,6,7,8,9,10];
  console.log(array);
  let L=array.length;
  for(let i=1 ; i<=L ; i++){
  
    let x = array[i];
    let cheak = test(x);
  
    if(cheak == true)
        even.push(x);
    else
        odd.push(x);
  }
  
  console.log(`even numbers is: ${even}`);
  console.log(`odd  numbers is: ${odd}`);