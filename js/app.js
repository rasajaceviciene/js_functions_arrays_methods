//VOID function - nieko negrazina, tik spausdina (isveda duomenis)

function sayHello(){  //function definition
    console.log ('Hello');
}

sayHello(); //function call

//----------------

function sum(a, b, c){  //function definition
    return a + b + c;
}

console.log(sum(2, 6, 8));  //function call

//----------------

function sum1(a, b, c){   //function definition
    console.log(`Suma: ${a + b + c}`);
}

sum1(10, 20, 30);  //function call

//----------------

function masyvas(a, b, c){
    return[a, b, c];
}

console.log(masyvas(2, 3, 6));


function printMasyvas(masyvoReiksmes){
    for(reiksmes of masyvoReiksmes){
        console.log(reiksmes);
    }
}

printMasyvas(masyvas(4, 8, 1));

//----------------

const kitasUzrasymoBudas = function(a, b){
    console.log(`Suma: ${a + b}`)
}

kitasUzrasymoBudas(5, 10);

//Vystantis js uzrasymas trumpejo:

const naujasUzrasymoBudas = (a, b) => console.log(`Suma: ${a + b}`);

naujasUzrasymoBudas(15, 15);

//------------------------

const sum2 = (a, b) =>{
    if(a > b){
        return; // jeigu tenkinama salyga vykdymas sustabdomas
    };
    console.log(`Suma: ${a + b}`);
}

sum2(10, 19);

const isvesti = (a, b) =>{
    if(!a && !b){
        return; //jeigu nera a ir b, nespausdina
    }
    console.log(`Vardas ir pavarde: ${a} ${b}`);
}

isvesti("Jonas", "Jonaitis");

//kai nezinome, kiek bus argumentu

const sum3 = (...numbers) =>{ //spread operator "..."
    return numbers;
}

console.log(sum3(10,12,1,4,55,60)); //reiskmes sudeda i masyva

// susumuoti skaicius, kurie didesni uz 60:

const numberGreater60Sum = (...skaiciai) =>{
    if(skaiciai.length == 0){
        return "no numbers";
    }

    let pradineSuma = 0;

    for(let skaicius of skaiciai){
        if (skaicius > 60){
            pradineSuma += skaicius;
        }
        
    }
    return pradineSuma;
}

console.log(numberGreater60Sum(10,11,61,55,90,30,69));

//Speed Converter

const toMilesperHour = (kilometersPerHour) =>{
    if(kilometersPerHour < 0){
        return -1;
    }
        return Math.round(kilometersPerHour / 1.609);  
}

console.log(toMilesperHour(1.5));
console.log(toMilesperHour(10.25));
console.log(toMilesperHour(-5.6));
console.log(toMilesperHour(25.42));
console.log(toMilesperHour(75.114));

const printConversion = (kilometersPerHour) =>{
    if(kilometersPerHour < 0){
        console.log(`Invalid Value`)
    }
        console.log(`${kilometersPerHour} km/h = ${toMilesperHour(kilometersPerHour)} mi/h`);
}

printConversion(1.5);
printConversion(10.25);
printConversion(-5.6);
printConversion(25.42);
printConversion(75.114);

//Return true if the given non-negative number is 1 or 2 more than a multiple of 20

const more20 = (givenNumber) =>{
    if(givenNumber < 0){
        return;
    }
    if(givenNumber % 20 == 1 || givenNumber % 20 == 2){
        return true;
    }
        return false; 
}

console.log(more20(41));

// IIFE funkcijos - funkcija, kuri moka pati save iskviesti
// jos viduje rasomas kodas, kad isvengti kintamuju ar kodo dubliavimosi
// tai yra kodas jos viduje yra izoliuotas

//gali buti uzrasoma taip:
(function(){


})();


//arba galima uzrasyti taip"
(()=>{


})();

(()=>{

    const sayMyname = (firstName) =>{
        let title = "Mrs.";
        console.log(`${title} ${firstName}`);
    }
    
    sayMyname("Rasa")

})();

//--------------------

const returnDataEnd = (number) =>{
    let data = [10,12,20,24];
    console.log(`Array before: ${data}`);
    data.push(number); //prideda i gala
    console.log(`Array after: ${data}`);
    data.pop(number); //salina paskutini
    console.log(`Array in the end: ${data}`);
}

returnDataEnd(55);

const returnDataBeginning = (number) =>{
    let data = [10,12,20,24];
    console.log(`Array before: ${data}`);
    data.unshift(number); //prideda i prieki
    console.log(`Array after: ${data}`);
    data.shift(number); //salina pirma
    console.log(`Array in the end: ${data}`);
    console.log(`Masyvo ilgis: ${data.length}`) //masyvo ilgis
}

returnDataBeginning(124);

//"splice" - salina elementa is masyvo vidurio, taciau sis metodas labai letina
//koda ir naudojamas retai

//kai reikia teksto eilute konvertuoti i masyva, naudojame "split"

const returnDataSplitComma = () =>{
    let items = "Vilnius,Kaunas,Alytus";
    console.log(items.split(',')); //nurodomas skyriklis - kablelis
}

returnDataSplitComma();

//kitas budas

const returnDataSplitSpace = () =>{
    let values = "Vilnius Kaunas Alytus";
    values = values.split(' '); //nurodomas skyriklis - tarpas
    console.log(values);
}

returnDataSplitSpace();

//kai reikia masyva konvertuoti i teksta, naudojame "join"

const returnDataJoin = () =>{
    let masyvas = ["Druskininkai","Siauliai","Taurage"];
    masyvas = masyvas.join(' : '); //nurodome, kokiu zenklu atskirti teksta
    console.log(masyvas);
}

returnDataJoin();

//masyvu sujungimas su "concat"

const returnDataConcat = () =>{
    let studentsName = ["Ieva","Mantas","Tomas"];
    let teachersName = ["Adomas","Linas"];
    let allNames = studentsName.concat(teachersName); // sujungia abu masyvus i viena
    
    console.log(allNames); //isveda masyva allNames
    
    //"forEach" isveda (iteruoja) masyvo elementus
    //tai nera ciklas, o iteratyvi funkcija
    allNames.forEach(firstName => console.log(`Vardas: ${firstName}`));
}

returnDataConcat();

//"indexOf", "slice" ir "substring"

const returnDataIndexOf = () =>{
    let firstName = ["Mindaugas","Aloyzas"];
    console.log(firstName[1].indexOf("loyz")); //isvedamas antrojo masyvo elemento indeksas, kuriuo prasideda fragmentas
}

returnDataIndexOf();

const returnDataSlice = () =>{
    let firstName = ["Gediminas","Martynas"];
    console.log(firstName[0].slice(1,4)); //paliekama pirmojo masyvo elemento nuo 1-3 simboliai "edi"
}

returnDataSlice();


