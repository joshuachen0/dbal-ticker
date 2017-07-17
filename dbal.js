function ticker() {
    var termDates = [["9/25/17", "12/8/17"], ["1/3/18", "3/16/18"], ["4/2/18", "6/15/18"]];
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
    if (currentDate.getTime() >= startDate && currentDate.getTime() <= endDate)
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
