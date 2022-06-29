//usual variable
let tmp = 0;
let flight=[];
let maxnfly=1;


function go(arg){
    //defined used variable
    tmp = arg;
    let n, iter = 0; //
    n = arg;
    nn = n;
    aff = n.toString() + "-";

    while (n > 1) {
        if (n%2 === 0) { //if the number is odd, divied it by 2, if it's even, multiply it by 3 and add 1
            n = n / 2
        } else {
            n = 3 * n + 1
        }
        iter++;
        aff = aff + n.toString() + "-";
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
        if (flight[flight.length-1] !== Math.max(...flight)) { //if the last fly time on the list is not the longest, his delete
            flight.pop();
        }


//display results
    document.getElementById('flyListLenght').innerText = " fly list lenght : " + flight.length;
    document.getElementById('flyList').innerText = 'fly list : [' + flight + ']';
    document.getElementById('start').innerText = "number sudying : " + nn;
    document.getElementById('flight').innerText = " flight time :" + iter;
    document.getElementById('now').innerText = 'operation :' + aff;
    document.getElementById('longerFlight').innerText = 'longest flight :' + Math.max(...flight) + ' from number ' + maxnfly;
}

//change number study manualy
function increase(c) {
    switch (c) {
        case '+' : go(tmp+1); tmp += 1; break
        case '-' : go(tmp-1); tmp -= 1;
    }
}

//increase the number studied
function inc() {
    tmp += 1; //change the 1 to the value you want to reach high number quickly
    go(tmp);
}
//increase automaticaly
function start() {
        setInterval(inc, 0);
}