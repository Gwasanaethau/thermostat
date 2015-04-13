var JavaBuzz = function() {

};

JavaBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return(number % divisor === 0);
};

JavaBuzz.prototype.says = function(number) {
	if (this._isDivisibleBy(number, 15)) {
		return "JavaBuzz";
	} else if (this._isDivisibleBy(number, 3)) {
		return "Java";
	} else if (this._isDivisibleBy(number, 5)) {
		return "Buzz";
	} else {
		return number;
	};
};
