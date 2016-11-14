/*function ticker() {
    var startDate = new Date("March 17, 2016");
    var endDate = new Date("June 11, 2016");
    var currentDate = new Date();
    var quarterLength = endDate.getTime() - startDate.getTime();
    var result = (1 - (currentDate.getTime() - startDate.getTime()) / quarterLength) * 475.00;
    if (result < 0) {
        result = 0.00;
    }
    document.getElementById("dballeft").innerHTML = "$" + result.toFixed(2);
}*/

/*var fileDisplayArea = document.getElementById('fileDisplayArea');
function readDates(file) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if(rawFile.readyState === 4) {
			if(rawFile.status === 200 || rawFile.status == 0) {
				var allText = rawFile.responseText;
				fileDisplayArea.innerText = allText;
			}
		}
	}
	rawFile.send(null);
}
readDates("file:///home/josh/Documents/dbal-ticker/dates.txt");*/

function ticker() {
    var termDates = [["9/26/16", "12/9/16"], ["1/4/17", "3/17/17"], ["4/3/17", "6/16/17"]];
    var term = 0;
    var nextStartDate = new Date(termDates[term+1][0]);
    var currentDate = new Date();
    while (currentDate.getTime() >= nextStartDate.getTime()) {
        term += 1;
        nextStartDate = new Date(termDates[term+1][0]);
    }
    var startDate = new Date(termDates[term][0]);
    var endDate = new Date(termDates[term][1]);
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
