var button = document.getElementById("button");
var history = document.getElementById("city-history");
var input = document.getElementById("input");
var cities = [];
console.log(cities);




var weather = {
    apiKey: "9cc92b36abe4cc47096b09e22dac9a86", 
    fetchWeather: function (city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=" + this.apiKey
         ).then((respose) => respose.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name} = data;
        const { description } = data.weather[0];
        const { temp,  humidity } = data.main;
        const { speed } = data.wind;
        const date = new Date(data.dt * 1000);
        document.querySelector(".city").innerText = "weather in " + name + " " + date.toDateString();
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


var daily = {
    apiKey: "9cc92b36abe4cc47096b09e22dac9a86",
    fetchDaily: function (city){
        fetch(
            "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json()).then((data) => this.displayForecast(data));
    },
    displayForecast: (data) => {
        console.log(data);
        let row = document.querySelector('.grid-x .forecast');
        row.innerHTML = data.list.map((day, list) => {
            if (list <= 4){
                const dt = new Date(day.dt * 1000);
                const {speed} = day.wind;
                const {temp, humidity} = day.main;
                row.setAttribute("class", "display:flex, flex-wrap:nowrap;")
                

                return `
                <div class="forecast cell small-6 primary-color">
                <div class="cardbox">
                    <h4>${dt.toDateString()}</h4>
                    </div>
                    <img
                        src="http://openweathermap.org/img/wn/${
                            day.weather[0].icon}@4x.png"
                        class="card-img-top"
                        malt="${day.weather[0].description}"
                        width="200px"
                        height="200px"/>
                    <div class="card-section">
                        <p>wind speed: ${speed}</p>
                        <p>${Math.round(temp)}°F</p>
                        <P>${humidity}%</p>
                    </div>
            </div>`;
                
            }
        }).join(' ');

    },
    searches: function (data) {
        this.fetchDaily(document.querySelector("input").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    daily.searches();
});




// need to figure out save method variable.










