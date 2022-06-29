//usual variable
var tmp = 0;
let flight = [];
var maxnfly;

let d1;
let d2;
let d3;

let list = [];
let itteration = 0;

function date1(){
    d1 = new Date();
}
function nmax(nm) {
    let max = eval(nm + "+" + "1" );

    for (let i = 0; i < max ; i++) {
        go(i);
        d3 = new Date();
        console.log(i + ' - ' + d3.getMinutes() + "," + d3.getSeconds() + ',' + d3.getMilliseconds());
    }
    d2 = new Date();

    let calcul = (d2.getMinutes()*60 + d2.getSeconds() + d2.getMilliseconds()/1000) - (d1.getMinutes()*60 + d1.getSeconds() + d1.getMilliseconds()/1000);
    document.getElementById('time').innerText = "effectué en " + (Math.round(calcul*100))/100 + ' secondes';
    document.getElementById('timer').innerText = "no arrondis :" + calcul;
    document.getElementById('iterration').innerText = "nombre de passage dans la boucle : " + itteration;


}




function go(arg) {

    //defined used variable
    tmp = arg;
    let n, iter = 0; //
    n = arg;
    nn = n;
    aff = n.toString() + "-";


    while (n > 1) {
        if (n % 2 === 0) { //if the number is even, divied it by 2, if it's odd, multiply it by 3 and add 1
            n = n / 2
 console.log('boucle')
        } else {
            n = 3 * n + 1
        }
        iter += 1;
        aff = aff + n.toString() + "-";
        itteration += 1;


    }

    //find the highest flight time
    flight.push(iter); //add current flight time in list of all flight time
    if (iter === Math.max(...flight)) { //if the current flight time is the longest
        maxnfly = tmp;              //save the current studying number for display it


    }

    //delete the most useless part of the list, to not exceed the limitation of google chrome navigator (5m itteration)
    if (flight[0] !== Math.max(...flight)) { //if the first fly tim on the list is not the longest, his delete
        flight.shift();


    }
    if (flight[flight.length - 1] !== Math.max(...flight)) { //if the last fly time on the list is not the longest, his delete
        flight.pop();


    }


    //display results
    document.getElementById('flyListLenght').innerText = " fly list lenght : " + flight.length;
    document.getElementById('flyList').innerText = 'fly list : [' + flight + ']';
    document.getElementById('nbr').innerText = "number sudying : " + nn;
    document.getElementById('flight').innerText = " flight time :" + iter;
    document.getElementById('now').innerText = 'operation :' + aff;
    document.getElementById('longerFlight').innerText = 'longest flight :' + Math.max(...flight) + ' from number ' + maxnfly;


}

//increase the number studied
function inc() {
    tmp += 1; //change the 1 to the value you want to reach high number quickly
    go(tmp);
}

let temp = 0;
//increase automaticaly
function start() {
    temp += 1;
    repeat = setInterval(inc, 1);
    if (temp === 1) {
        document.getElementById('start').style.display = "none";
    }
}
//stop
function stop() {
    temp -= 1;
    document.getElementById('start').style.display = "initial";
    clearInterval(repeat);
}





