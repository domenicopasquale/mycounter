let addCounter = document.querySelector(".add");
let lowerCounter = document.querySelector(".lower");
let resetCounter = document.querySelector(".reset");

let count = 0;

addCounter.addEventListener("click", () => {
	count++;
	document.getElementById("counter").innerHTML = count;
});

lowerCounter.addEventListener("click", () => {
	count--;
	document.getElementById("counter").innerHTML = count;
});

resetCounter.addEventListener("click", () => {
	count = 0;
	document.getElementById("counter").innerHTML = count;
});
