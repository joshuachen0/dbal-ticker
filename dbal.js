function ticker() {
    var startDate = new Date("March 17, 2016");
    var endDate = new Date("June 11, 2016");
    var currentDate = new Date();
    var quarterLength = endDate.getTime() - startDate.getTime();
    var result = (1 - (currentDate.getTime() - startDate.getTime()) / quarterLength) * 475.00;
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

