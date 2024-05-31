console.log("Hello Js..");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-img button");

async function getWhether(city){
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=891da0cbb8bba0a60aafbf7b0d89f06d&units=metric`);
	let data = await response.json();
	console.log(data);

	document.body.querySelector(".whether-icon").firstElementChild.src= `images/${data.weather[0].main.toLowerCase()}.png`
	
	document.body.querySelector(".celcius").innerHTML = data.main.temp+"&degC";

	document.body.querySelector(".city-name").innerHTML = data.name;

	document.body.querySelector("#humidity").innerHTML = data.main.humidity+"%";
	
	document.body.querySelector("#windspeed").innerHTML = data.wind.speed+" km/h";
}

searchBtn.addEventListener("click", () => {
	getWhether(searchBox.value);
	document.body.querySelector(".weather").style.display = "block";
})
