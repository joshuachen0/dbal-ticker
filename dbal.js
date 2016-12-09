function ticker() {
    var termDates = [["9/26/16", "12/9/16"], ["1/4/17", "3/17/17"], ["4/3/17", "6/16/17"]];
    var term = 0;
    if (term < 2) var nextStartDate = new Date(termDates[term+1][0]);
    else var nextStartDate = new Date(termDates([term][0]));
    var currentDate = new Date();
    while (currentDate.getTime() >= nextStartDate.getTime()) {
        term += 1;
        nextStartDate = new Date(termDates[term+1][0]);
    }
    var startDate = new Date(termDates[term][0]);
    var endDate = new Date(termDates[term][1]);
    var quarterLength = endDate.getTime() - startDate.getTime();
    var lengthOfDayInMs = 1000*60*60*24;
    var result = (1 - (currentDate.getTime() - startDate.getTime()) / (quarterLength + lengthOfDayInMs)) * 475.00;
    if (result < 0) {
        result = 0.00;
    }
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
