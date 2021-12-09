



var weather = {
    apiKey: "9cc92b36abe4cc47096b09e22dac9a86", 
    fetchWeather: function (city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=" + this.apiKey
         ).then((respose) => respose.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { description } = data.weather[0];
        const { temp,  humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".icon");
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed: " + speed + " MPH";
    },
    search: function (data) {
        this.fetchWeather(document.querySelector("input").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

