// // Lab 5

// var temp = 100;

// console.log(temp * (5/9) + 32 + " C");





// Lab 6

function tempConv (temp, unit) {
	if (unit === "C") {
	console.log((temp-32)*(5/9) + " C");
	} else if (unit === "F") {
	console.log((temp * (9/5) + 32) + " F");
	}
}

tempConv(212, "C");
tempConv(32, "C");
tempConv(65, "C");
tempConv(100, "F");
tempConv(-40, "C");

// Challenge 6: Square

function square(num) {
	return num * num;
}

console.log(square(4));
console.log(square(2) + square(3));

// // FizzBuzz

// for (var i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0 ) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // What should I wear?

// function whatDoIWear (event, temp) {
// 	var suggestion = "";
// 	if (event === "casual") {
// 		suggestion += "something comfy ";
// 	} else if (event === "semi-formal") {
// 		suggestion += "a polo ";
// 	} else if (event === "formal") {
// 		suggestion += "a suit ";
// 	}

// 	suggestion += "with "

// 	if (temp < 54) {
// 		suggestion += "a coat";
// 	} else if (temp >= 54 && temp <=70) {
// 		suggestion += "a jacket";
// 	} else if (temp > 70 ) {
// 		suggestion += "no jacket";
// 	}
// 	console.log("You are heading to a " + event + " event and should wear " + suggestion + " because it is " + temp + " degrees outside.")
// }

// whatDoIWear("formal", 30);
// whatDoIWear("casual", 50);
// whatDoIWear("semi-formal", 75);