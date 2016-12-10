function ticker() {
    var termDates = [["9/26/16", "12/9/16"], ["1/4/17", "3/17/17"], ["4/3/17", "6/16/17"]];
    var lengthOfDayInMs = 1000*60*60*24;
    
    var term = 1;
    var currentDate = new Date();
    var thisTerm = termDates[term-1];
    var thisTermDates = [new Date(thisTerm[0]), new Date(thisTerm[1])];
    while (term < 3 && currentDate.getTime() > (thisTermDates[1].getTime() + lengthOfDayInMs)) {
        term += 1;
        thisTerm = termDates[term-1];
        thisTermDates = [new Date(thisTerm[0]), new Date(thisTerm[1])];
    }
    
    var startDate = thisTermDates[0];
    var endDate = thisTermDates[1];
    var quarterLength = endDate.getTime() - startDate.getTime();
    var result = 0.00;
    if (currentDate.getTime() >= startDate)
        result = (1 - (currentDate.getTime() - startDate.getTime()) / (quarterLength + lengthOfDayInMs)) * 475.00;
    document.getElementById("dballeft").innerHTML = "$" + result.toFixed(2);
}

function names() {
    document.getElementById("names").style.left = Math.random() * window.innerWidth - 100 + "px";
    document.getElementById("names").style.top = Math.random() * window.innerHeight - 100 + "px";
}

ticker();
names();

time = 0;
setInterval(function() {
    ticker();
    time += 1;
    if(time >= 5) {
        names();
        time = 0;
    }
}, 200);
