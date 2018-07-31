"use strict"

console.log("esmu faila")

var mainigais = 5;
var x = 5;
var option = 5;
var y = 5;

console.log(typeof mainigais);

var teksts = "4";

console.log(typeof teksts);

var longtext = "gars teksts";

console.log(longtext);
console.log(typeof longtext);

var somevar = teksts;

var daljskaitlis = 5.4;
console.log(daljskaitlis);
console.log(typeof daljskaitlis);


var truefalse = true;
console.log(truefalse);
console.log(typeof truefalse);


//OBJEKTI

var objekts = [1,2,3,4];
console.log(objekts);
console.log(typeof objekts);

console.log(objekts[1]);


objekts[2] = null;
console.log(objekts);

console.log(objekts[2]);
console.log(objekts[4]);
console.log(objekts[2] == objekts[4]);


//not a nummber
var nan = NaN;
console.log(nan);


console.log("OTRA DALA")

//35
//objekts - mainigais kura glabati vairaki mainigie

var newobjekts = {
    name : "Elza",
    phone : "28779482"
}

console.log(newobjekts);
console.log(typeof newobjekts);

console.log(newobjekts.name);
console.log(typeof newobjekts);

var var1 = 5;
var Var1 = 10;
console.log(var1);//5
console.log(Var1);//10

var1 = Var1;

console.log(var1);//10

var1 = "teksts";


function calculation(){
    console.log("mes esam funkcija");
}

calculation();
calculation();
calculation();
calculation();

var calc = function(){
    console.log("cita funkcija");

}

calc();


var citafn = calc;

var calc = function(){
    console.log("cita funkcija");
    return 5;
}

var returedValue = calc();

function newCalculation(x,y){
    return x*y;
}

console.log(newCalculation(5,10));

var text2 = "text";

console.log(newCalculation(5,text2))

console.log(newCalculation(4,3,6)); // izmanto tikai nosauktos



// LOGICAL STRUCTURES

var condition = true;

//if statement

// true = 1
// false = 0

condition = false;

if (condition){
    console.log("condition executed");
} else{
    console.log("condition false");
}


var ifelse = 2;

if (ifelse == 5){
    console.log("true");
} else if (ifelse > 5){
    console.log(">5");
} else {

    console.log("<5")
}

//switch

var mynumber = 30;
switch (mynumber){
    case 30:
        console.log(30);
        break;
    case 15:
        console.log(15);
        break;
    default:
        console.log("end");
        break;
}


//cikls

/*for (var i = 0; i<5; i=i+1){
    console.log(i);
}

for (var i=0; i<4; i++){
    for (var j=0;j<4;j++){
        console.log(i);
        console.log(j);
        console.log(i*j);
    }
}
*/

var masivs = [4,3,2,1,0];

for ( var i = 0; i<masivs.length; i++){
    console.log(masivs[i]);
}

for(i=0;i<5;i++){
    if (i==1){
        console.log(i);
        break;
    }
    console.log(i);
}

var nr = 5;
while (nr < 7){
    console.log(nr);
    nr++;
}




var menu = [{
    name: "Sākums",
    link: "google.com"
},
{
    name: "Kontakti",
    link: "/kontakti.html"
}]

for(var z = 0;z < menu.length; z++){
    console.log("<a href='"+menu[z].link+"'>"+menu[z].name+"</a>");

}




//js operatori

var a=5;
var b=10;
console.log(a+b);//15

a+=b;
console.log(a);//15
console.log(b);//10

a++;
console.log(a)//16

var a = "elza";
var b = "ucelniece";
console.log(a+b); //elzaucelniece

var b = 20;
console.log(a+b);//elza20

var a = 12;
var b = true;
console.log(a+b)//13



if (1==1){console.log("vienads")};

if (1==1) &&(2==2){
    console.log("true");
} else { 
     console.log("false")
};

 console.log((1==1)&&(2==2));
 console.log((1==1)&&(2==3));
 console.log((1==1)||(1==2));
 console.log(1==1||2==3&&4==5);
 console.log(1==1&&2==3||4==4)


 if (1==1){
    console.log("true");
} else { 
     console.log("false")
};

console.log(1==1 ? "true" : "false");


//PRIMITIVIE TIPI
var anumber = 5;
console.log (anumber);//5
var b = anumber;
console.log(b);//5

a = {a:5};
b= a;
a = {a:4};


var array = [1,2,3];
var barray = array;
console.log(barray);

array.push(4);
console.log(array);
console.log(barray);


var aarray = ["a", "b"];
console.log(aarray); // a , b
console.log(barray); // 1,2,3,4


var test = "global";
console.log(test);

function localScope(){
    console.log(test);
}

function localScope2(){
    var test = "local";
    console.log(test);
}

localScope2();
console.log(test);