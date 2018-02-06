// Setting and Swapping
var myNumber = 42;
var myName = "Tom";
var holder = myName;
myName = myNumber;
myNumber = holder;
console.log(myName, myNumber);

//Print -52 to 1066
for(var x = -52; x< 1067; x++){
    console.log(x);
}

//Don't Worry, Be Happy
function beCheerful(){
    console.log("good morning!")
}

for(var x = 1; x < 99; x++){
    beCheerful();
}

//Multiples of Three - But Not All
for(var x = -300; x <= 0; x +=3){
    if(x === -3 || x === -6){
        continue;
    }
    console.log(x);
}

//Printing Integers with While
var x = 2000;
while(x < 5281){
    console.log(x);
    x +=1;
}

//You Say It's Your Birthday
function myBirthday(num1, num2){
if((num1 === 10 || num1 === 31 || num2 === 10 || num2 === 31) && num1 !== num2){
    console.log("How did you know?")}
    else{console.log("Just another day...")}
}
myBirthday(10, 31);

//Leap Year
function leapYear(year){
if((year % 4 === 0) && (year % 100 !== 0 || year %400 === 0)){
    console.log(true)}
    else{console.log(false)}
}
leapYear(400);

//Print and Count
var count = 0;
for(var x = 512; x <= 4096; x++){
    if(x % 5 === 0){
        console.log(x);
        count +=1;
    }
    console.log(count);
}

//Multiples of Six
var x = 0;
while(x <= 60000){
    if(x % 6 ===0){
        console.log(x)
    }
    x+=1;
}

//Counting, the Dojo Way
for(var x = 1; x <= 100; x++){
    if(x % 5 !== 0){
        console.log(x);}
        else if((x % 5 ===0) && (x % 10 !==0)){
            console.log("Coding");}
            else if((x % 5 ===0 && x %10 ===0)){
                console.log("Coding", "Dojo");}        
}

//What Do You Know?
function whatDoYouKnow(incoming){
    console.log(incoming);}
    whatDoYouKnow("look out!");

//Whoa, That Sucker's Huge
var sum = 0; 
for(var x = -300000; x <= 300000; x++){
    if (x % 2 !==0){
        sum += x}
}
console.log(sum);

//Countdown by Fours
var x = 2016;
while(x > 0){
    console.log(x);
    x -=4;
}

//Flexible Countdown
function flexibleCountdown(lowNum, highNum, mult){
    for(var x = highNum; x >= lowNum; x--){
        if(x % mult === 0){
            console.log(x);}
    }
}
    flexibleCountdown(2,9,3);

//The Final Countdown
function theFinalCountdown(param1, param2, param3, param4){
    var x = param2;
if(x >= param3){
    while(x >= param3){
        if((x % param1 === 0) && (x !== param4)){
            console.log(x);
        }
        x = x-1;
    }
}
else if(x < param3){
    while(x < param3){
        if((x % param1 === 0) && (x !== param4)){
            console.log(x);
        }
        x = x+1;
    }

}
}
theFinalCountdown(3,17,5,9);

//Countdown
function countdown(number){
    var arr = [];
    for(var x = number; x >= 0; x --){
        arr.push(x);
    }
    console.log(arr);
    console.log(arr.length);
}
countdown(5);

//Print and Return
function printAndReturn(arr){
    console.log(arr[0]);
return arr[1];
}
printAndReturn([5,40]);

//First Plus Length
function firstPlusLength(arr){
    return arr[0] + arr.length;
}

firstPlusLength([5,4,3,2,1]);
firstPlusLength(["what",4,3,2,1]);
firstPlusLength([false,4,3,2,1]);

//Values Greater than Second
function valuesGreaterthanSecond(arr){
var count = 0;
for(var x = 0; x <= arr.length-1; x++){
    if(arr[x] > arr[1]){
        console.log(arr[x]);
        count += 1;
    }
}
return count
}
valuesGreaterthanSecond([1,3,5,7,9,13]);

//Values Greater than Second, Generalized
function greaterThanSecondGeneral(arr){
    var arrnew = [];
    if(arr.length >= 2){
        for (var x = 0; x <= arr.length-1; x++){
        if(arr[x] > arr[1]){
            arrnew.push(arr[x])
        }
    }
    console.log(arrnew.length);
    return arrnew;
}else{
    console.log("There is no second value in the array");
}}
greaterThanSecondGeneral([3]);

//This Length, That Value
function thisLengthThatValue(num1, num2){
    var arr = [];
    if(num1 !== num2){arr.length = num1;
    for(var x = 0; x <= arr.length-1; x++){
        arr[x] = num2;
    }
    return arr;
}else{console.log("Jinx!")}
}
thisLengthThatValue(4,3);

//Fit the First Value
function fitTheFirstValue(arr){
if(arr[0] > arr.length){
    console.log("Too big!");
}
else if(arr[0] < arr.length){
    console.log("Too small!");
}else{console.log("Just right!")}
}
fitTheFirstValue([5,3,5,4,5])

//Fahrenheit to Celcius
function fahrenheitToCelcius(fDegrees){
    var cDegrees = (fDegrees - 32)*(5/9);
    return cDegrees;
}
fahrenheitToCelcius(32);

//Celcius to Fahrenheit
function celciusToFahrenheit(cDegrees){
    var fDegrees = ((9/5)*cDegrees) + 32;
    return fDegrees
}
celciusToFahrenheit(0);

//Optional
var cDegrees = 200;
var fDegrees = ((9/5)*cDegrees) + 32;

while(cDegrees !==fDegrees){
    cDegrees = cDegrees -1;
    fDegrees = ((9/5)*cDegrees) + 32
}

console.log("c temp is equal to f temp at "+cDegrees+ " degrees.");

//Biggie Size
function makeItBig(arr){
    for(var x = 0; x < arr.length; x++){
        if(arr[x] > 0){
            arr[x] = "big";
        }
    }
    return arr;
}
makeItBig([-1,3,5,-5]);

//Print Low, Return High
function printLowReturnHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for(var x = 0; x < arr.length; x++){
        if(arr[x] < low){
            low = arr[x];
        }
        if(arr[x] > high){
            high = arr[x];
        }
    }
    console.log(low);
    return(high);
}
printLowReturnHigh([0,4,-3,7,2,-10])

//Print One, Return Another
function printOneReturnAnother(arr){
    for(var x = 0; x < arr.length; x++){
        if(arr[x] % 2 !== 0){
            var odd= arr[x];
            break;
        }
    }
    console.log(arr[arr.length-2]);
    return odd;
}
printOneReturnAnother([4,2,5,3,1,5,6,-1,2])

//Double Vision
function double(arr){
    var arrnew = [];
    for(var x = 0; x < arr.length; x++){
        arr[x] = arr[x]*2;
        arrnew.push(arr[x]);
    }
    return arrnew;
}
double([1,2,3]);

//Count Positives
function countPositives(arr){
    var pos = 0;
    for(var x= 0; x <arr.length; x++){
        if(arr[x]> 0){
            pos+=1;
        }
    }
    arr[arr.length-1] = pos;
    return arr;
}
countPositives([-1,1,1,1]);

//Evens and Odds
function evensAndOdds(arr){
    for(var x = 0; x < arr.length; x++){
        if((arr[x] % 2 !== 0) && (arr[x+1] % 2 !== 0) && (arr[x+2] % 2 !== 0)){
            console.log("That's odd!")
        }
        if((arr[x] % 2 === 0) && (arr[x+1] % 2 === 0) && (arr[x+2] % 2 === 0)){
            console.log("Even more so!")
        }
    }
}
evensAndOdds([5,7,7,8,9,10])

//Increment the Seconds
function incrementTheSeconds(arr){
    for(var x = 0; x < arr.length; x++){
        if(x % 2 !== 0){
            arr[x] +=1;
        }
        console.log(arr[x]);
    }
    return arr;
}
incrementTheSeconds([3,4,5,6,7,8]);

//Previous Lengths
function previousLengths(arr){
for(var x = arr.length-1; x  > 0; x--){
    arr[x] = arr[x-1].length;
}
arr[0] = undefined
return arr;
}
previousLengths(["ee", "eeeeee", "eeeeeee", "e", "eee", "eeee"])


//Add Seven to Most
function sevenToMost(arr){
    var arrNew = [];
    for(x = 1; x < arr.length; x++){
        arrNew.push(arr[x]+7)
    }

    return arrNew;
    
}
sevenToMost([3,5,7,12,5,5,7]);

//Reverse Array
function reverseArray(arr){
    for(var x = 0; x <(arr.length*.5); x++){
        var temp = arr[arr.length - (x+1)];
        
        arr[arr.length - (x+1)] = arr[x];
        
      arr[x]  = temp }
  return arr;
  }
  reverseArray([9,8]);
  reverseArray([9,8,7,6,5,4,3,27,2]);

//Outlook: Negative
function outlookNegative (arr){
    arrNew = [];
    for(var x = 0; x < arr.length; x++){
        arrNew[x] = -+arr[x];
       }
       return arrNew;
}
outlookNegative([4,5,-3,2,-1]);

//Always Hungry
function alwaysHungry(arr){
    var count = 0;
for(var x= 0; x< arr.length; x++){
    if(arr[x] === "food"){
        console.log("yummy");
    }else {count +=1}
}
    if(count === arr.length){
        console.log("I'm hungry")
    }
}
alwaysHungry([5,"food",7,3,"food",1,2,true]);
alwaysHungry([5,"f",7,3,"food",1,2,true]);
alwaysHungry([5,"f",7,3,"f",1,2,true]);

//Swap Toward the Center
function swapTowardCenter(arr){
    var arrNew = arr;
for(var x =0; x< arr.length; x++){
    if(x % 2 ===0){
        var temp = arrNew[x];
        arrNew[x]= arrNew[arrNew.length - (x+1)];
        arrNew[arrNew.length - (x+1)] = temp;}
    else{
        arr[x] = arrNew[x];
    }
    }
    return arr;
}
swapTowardCenter([4,3,5,6,1,2]); 

//Scale the Array
function scaleTheArray(arr, num){
    for(x = 0; x < arr.length; x++){
        arr[x] *= num;
    }
    return arr;
}
    scaleTheArray([4,5,6,2,3,1,15], 3);

//Swap Toward the Center
function swapTowardCenter(arr){
        for(var x = 0; x <(arr.length*.5); x+=2){
            var temp = arr[arr.length - (x+1)];
            
            arr[arr.length - (x+1)] = arr[x];
            
          arr[x]  = temp }
      return arr;
      }
      swapTowardCenter([9,8]);
      swapTowardCenter([9,8,7,6,5,4,3,27,2]);

      ///blah blah



