function FizzBuzz() {
	
	this.read = function(num1, num2) {
		this.begin = num1;
		this.end = num2;
	};
	
	this.makeFizz = function() {
		var words = "";
		for (var i = this.begin; i < (this.end + 1); i++) {
		
			if (i%3 === 0 && i%5 !== 0) {
				words += "Fizz";
			}
			else if (i%5 === 0 && i%3 !== 0) {
				words += "Buzz";
			}
			else if ( i%3 === 0 && i%5 === 0) {
				words += "FizzBuzz";
			}
			else {
				words += i;
			}
			words += "<br>";
		}
		return words;
	};

	this.write = function() {
		document.getElementById("output").innerHTML = this.makeFizz(); 
	};	
}

function onButtonClick () {
	var start = parseInt(document.getElementById("start-input").value);
	var end = parseInt(document.getElementById("end-input").value);
	
	document.getElementById("start").innerHTML = "Start: " + start;
	document.getElementById("end").innerHTML = "End: " + end;

	var fizz = new FizzBuzz();
	fizz.read(start,end);

	fizz.write();
}
