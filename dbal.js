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

ticker();
setInterval(function(){ticker()}, 200)
