/*displayDbal();


function displayDbal() {
    startDate = new Date("March 17, 2016");
    endDate = new Date("June 11, 2016");
}*/

function ticker() {
    var startDate = new Date("March 17, 2016");
    var endDate = new Date("June 11, 2016");
    var currentDate = new Date();
    var quarterPeriod = endDate.getTime() - startDate.getTime();
    var result = (1 - (currentDate.getTime() - startDate.getTime()) / quarterPeriod) * 475.00;
    if (result < 0) {
        result = 0.00;
    }
    document.getElementById("dballeft").innerHTML = "$" + result.toFixed(2);
}

ticker();
endDate = new Date("June 11, 2016");
cDate = new Date();
//while (cDate.getTime() != endDate.getTime()) {
    cDate = new Date();
    delay = new Date(cDate.getTime() + 1000);
    ticker();
    while (cDate.getTime() != delay.getTime()) {
        cDate = new Date();
    }
//}

