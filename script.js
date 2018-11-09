//https://github.com/karbassi/idx-528/blob/master/week-10/assignment/README.md

//why the heck is temp in kelvin?
//K − 273.15 = °C

let city_search = document.querySelector("#city-search");

const get_weather_current = (data) => {
    let weather_temp_now_current = (data.main.temp - 273.15).toFixed(2);
    let weather_summary_current = data.weather[0].main;
    let weather_icon_current = data.weather[0].icon;
    let weather_temp_max_current =
        (data.main.temp_max - 273.15).toFixed(2);
    let weather_temp_min_current = (data.main.temp_min - 273.15).toFixed(2);

    let on_page_temp_now_current = document.getElementById("on-page-temp-now-current");
    on_page_temp_now_current.innerText = weather_temp_now_current;

    let on_page_summary_current = document.getElementById("on-page-summary-current");
    on_page_summary_current.innerText = weather_summary_current;

    let on_page_icon_current = document.getElementById("on-page-icon-current");
    on_page_icon_current.src = `http://openweathermap.org/img/w/${weather_icon_current}.png`; //x.src=imgurl

    let on_page_temp_max_current = document.getElementById("on-page-temp-max-current");
    on_page_temp_max_current.innerHTML = weather_temp_max_current;

    let on_page_temp_min_current = document.getElementById("on-page-temp-min-current");
    on_page_temp_min_current.innerHTML = weather_temp_min_current;
};


//I want to forloop by (var i = 1; i <= 6; i = i + 1), but idk if I will have enough time. Therefore I will list out all separately first. If I have time afterwardsm I will study the forloop.
const get_weather_forecast_1 = (data) => {

    let weather_summary_forecast_1 = data.list[8 * 0].weather[0].main;
    let weather_icon_forecast_1 = data.list[8 * 0].weather[0].icon;
    let weather_temp_max_forecast_1 = (data.list[8 * 0].main.temp_max - 273.15).toFixed(2);
    let weather_temp_min_forecast_1 = (data.list[8 * 0].main.temp_min - 273.15).toFixed(2);
  
    let on_page_summary_forecast_1 = document.getElementById("on-page-summary-forecast-1");
    on_page_summary_forecast_1.innerText = weather_summary_forecast_1;

    let on_page_icon_forecast_1 = document.getElementById("on-page-icon-forecast-1");
    on_page_icon_forecast_1.src = `http://openweathermap.org/img/w/${weather_icon_forecast_1}.png`; //x.src=imgurl

    let on_page_temp_max_forecast_1 = document.getElementById("on-page-temp-max-forecast-1");
    on_page_temp_max_forecast_1.innerHTML = weather_temp_max_forecast_1;

    let on_page_temp_min_forecast_1 = document.getElementById("on-page-temp-min-forecast-1");
    on_page_temp_min_forecast_1.innerHTML = weather_temp_min_forecast_1;
};

const get_weather_forecast_2 = (data) => {

    let weather_summary_forecast_2 = data.list[8 * 1].weather[0].main;
    let weather_icon_forecast_2 = data.list[8 * 1].weather[0].icon;
    let weather_temp_max_forecast_2 = (data.list[8 * 1].main.temp_max - 273.15).toFixed(2);
    let weather_temp_min_forecast_2 = (data.list[8 * 1].main.temp_min - 273.15).toFixed(2);
   
    let on_page_summary_forecast_2 = document.getElementById("on-page-summary-forecast-2");
    on_page_summary_forecast_2.innerText = weather_summary_forecast_2;

    let on_page_icon_forecast_2 = document.getElementById("on-page-icon-forecast-2");
    on_page_icon_forecast_2.src = `http://openweathermap.org/img/w/${weather_icon_forecast_2}.png`; 

    let on_page_temp_max_forecast_2 = document.getElementById("on-page-temp-max-forecast-2");
    on_page_temp_max_forecast_2.innerHTML = weather_temp_max_forecast_2;

    let on_page_temp_min_forecast_2 = document.getElementById("on-page-temp-min-forecast-2");
    on_page_temp_min_forecast_2.innerHTML = weather_temp_min_forecast_2;
};

const get_weather_forecast_3 = (data) => {

    let weather_summary_forecast_3 = data.list[8 * 2].weather[0].main;
    let weather_icon_forecast_3 = data.list[8 * 2].weather[0].icon;
    let weather_temp_max_forecast_3 = (data.list[8 * 2].main.temp_max - 273.15).toFixed(2);
    let weather_temp_min_forecast_3 = (data.list[8 * 2].main.temp_min - 273.15).toFixed(2);
   
    let on_page_summary_forecast_3 = document.getElementById("on-page-summary-forecast-3");
    on_page_summary_forecast_3.innerText = weather_summary_forecast_3;

    let on_page_icon_forecast_3 = document.getElementById("on-page-icon-forecast-3");
    on_page_icon_forecast_3.src = `http://openweathermap.org/img/w/${weather_icon_forecast_3}.png`;

    let on_page_temp_max_forecast_3 = document.getElementById("on-page-temp-max-forecast-3");
    on_page_temp_max_forecast_3.innerHTML = weather_temp_max_forecast_3;

    let on_page_temp_min_forecast_3 = document.getElementById("on-page-temp-min-forecast-3");
    on_page_temp_min_forecast_3.innerHTML = weather_temp_min_forecast_3;
};

const get_weather_forecast_4 = (data) => {

    let weather_summary_forecast_4 = data.list[8 * 3].weather[0].main;
    let weather_icon_forecast_4 = data.list[8 * 3].weather[0].icon;
    let weather_temp_max_forecast_4 = (data.list[8 * 3].main.temp_max - 273.15).toFixed(2);
    let weather_temp_min_forecast_4 = (data.list[8 * 3].main.temp_min - 273.15).toFixed(2);
   
    let on_page_summary_forecast_4 = document.getElementById("on-page-summary-forecast-4");
    on_page_summary_forecast_4.innerText = weather_summary_forecast_4;

    let on_page_icon_forecast_4 = document.getElementById("on-page-icon-forecast-4");
    on_page_icon_forecast_4.src = `http://openweathermap.org/img/w/${weather_icon_forecast_4}.png`; 

    let on_page_temp_max_forecast_4 = document.getElementById("on-page-temp-max-forecast-4");
    on_page_temp_max_forecast_4.innerHTML = weather_temp_max_forecast_4;

    let on_page_temp_min_forecast_4 = document.getElementById("on-page-temp-min-forecast-4");
    on_page_temp_min_forecast_4.innerHTML = weather_temp_min_forecast_4;
};

const get_weather_forecast_5 = (data) => {

    let weather_summary_forecast_5 = data.list[8 * 4].weather[0].main;
    let weather_icon_forecast_5 = data.list[8 * 4].weather[0].icon;
    let weather_temp_max_forecast_5 = (data.list[8 * 4].main.temp_max - 273.15).toFixed(2);
    let weather_temp_min_forecast_5 = (data.list[8 * 4].main.temp_min - 273.15).toFixed(2);
   
    let on_page_summary_forecast_5 = document.getElementById("on-page-summary-forecast-5");
    on_page_summary_forecast_5.innerText = weather_summary_forecast_5;

    let on_page_icon_forecast_5 = document.getElementById("on-page-icon-forecast-5");
    on_page_icon_forecast_5.src = `http://openweathermap.org/img/w/${weather_icon_forecast_5}.png`; 

    let on_page_temp_max_forecast_5 = document.getElementById("on-page-temp-max-forecast-5");
    on_page_temp_max_forecast_5.innerHTML = weather_temp_max_forecast_5;

    let on_page_temp_min_forecast_5 = document.getElementById("on-page-temp-min-forecast-5");
    on_page_temp_min_forecast_5.innerHTML = weather_temp_min_forecast_5;
};

const search_input = (event) => {
   
    let element = event.target;
    let user_input = element.value;
 
    let URL_current = `http://api.openweathermap.org/data/2.5/weather?q=${user_input}&APPID=25bc90a1196e6f153eece0bc0b0fc9eb`; 
    
    fetch(URL_current) //we have a string here
        .then((response) => {
            return response.json();
        }) //now we have an object
        .then(get_weather_current)

    let URL_forecast = `http://api.openweathermap.org/data/2.5/forecast?q=${user_input}&APPID=25bc90a1196e6f153eece0bc0b0fc9eb`; 

    fetch(URL_forecast) 
        .then((response) => {
            return response.json();
        })
        .then(get_weather_forecast_1)

    fetch(URL_forecast) 
        .then((response) => {
            return response.json();
        }) 
        .then(get_weather_forecast_2)

    fetch(URL_forecast) 
        .then((response) => {
            return response.json();
        })
        .then(get_weather_forecast_3)

    fetch(URL_forecast) 
        .then((response) => {
            return response.json();
        }) 
        .then(get_weather_forecast_4)

    fetch(URL_forecast) 
        .then((response) => {
            return response.json();
        }) 
        .then(get_weather_forecast_5)
};

city_search.addEventListener("change", search_input);