function tempConv (temp, unit) {
	var str = "Takes value of " + temp + unit + " and convert it to the opposite unit."
	if (unit === "F") {
	console.log((temp-32)*(5/9) + " C");
	} else if (unit === "C") {
	console.log((temp * (9/5) + 32) + " F");
	}
	console.log(str);
}

tempConv(100, "C");