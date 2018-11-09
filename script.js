//https://github.com/karbassi/idx-528/blob/master/week-10/assignment/README.md

//why the heck is temp in kelvin?
//48K − 273.15 = -225.1°C

let city_search = document.querySelector("#city-search");
console.log(city_search);

const get_weather_current = (data) => {
    let weather_temp_now_current = (data.main.temp - 273.15).toFixed(2);
    let weather_summary_current = data.weather[0].main;
    let weather_icon_current = data.weather[0].icon;
    let weather_temp_max_current =
        (data.main.temp_max - 273.15).toFixed(2);
    let weather_temp_min_current = (data.main.temp_min - 273.15).toFixed(2);

    console.log(weather_temp_now_current, weather_summary_current, weather_icon_current, weather_temp_max_current, weather_temp_min_current);

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

    let weather_summary_forecast_1 = data.list[8 * 1 - 1].weather[0].main;
    let weather_icon_forecast_1 = data.list[8 * 1 - 1].weather[0].icon;
    let weather_temp_max_forecast_1 = (data.list[8 * 1 - 1].main.temp_max - 273.15).toFixed(2);
    let weather_temp_min_forecast_1 = (data.list[8 * 1 - 1].main.temp_min - 273.15).toFixed(2);
    console.log(weather_summary_forecast_1, weather_icon_forecast_1, weather_temp_max_forecast_1, weather_temp_min_forecast_1);

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

    let weather_summary_forecast_2 = data.list[8 * 2 - 1].weather[0].main;
    let weather_icon_forecast_2 = data.list[8 * 2 - 1].weather[0].icon;
    let weather_temp_max_forecast_2 = (data.list[8 * 2 - 1].main.temp_max - 273.15).toFixed(2);
    let weather_temp_min_forecast_2 = (data.list[8 * 2 - 1].main.temp_min - 273.15).toFixed(2);
    console.log(weather_summary_forecast_2, weather_icon_forecast_2, weather_temp_max_forecast_2, weather_temp_min_forecast_2);

    let on_page_summary_forecast_2 = document.getElementById("on-page-summary-forecast-2");
    on_page_summary_forecast_2.innerText = weather_summary_forecast_2;

    let on_page_icon_forecast_2 = document.getElementById("on-page-icon-forecast-2");
    on_page_icon_forecast_2.src = `http://openweathermap.org/img/w/${weather_icon_forecast_2}.png`; //x.src=imgurl

    let on_page_temp_max_forecast_2 = document.getElementById("on-page-temp-max-forecast-2");
    on_page_temp_max_forecast_2.innerHTML = weather_temp_max_forecast_2;

    let on_page_temp_min_forecast_2 = document.getElementById("on-page-temp-min-forecast-2");
    on_page_temp_min_forecast_2.innerHTML = weather_temp_min_forecast_2;
};


const searchInput = (event) => {
    //this is one forecast: will hae to forloop and do separate for current

    console.log(event); //페이지에서 빈칸에 뭔가 쓰고서 tab을 눌러야 그 창에서 나와서 change로 읽혀서 콘솔에 뭔가 로그가 돼
    let element = event.target;
    let userInput = element.value;
    console.log(userInput); //whatever the user types in anything here, that anything is console.logged


    let URL_current = `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=25bc90a1196e6f153eece0bc0b0fc9eb`; //this is weathered
    console.log(URL_current);
    fetch(URL_current) //we have a string here
        .then((response) => {
            return response.json();
        }) //now we have an abject
        .then(get_weather_current)



    let URL_forecast = `http://api.openweathermap.org/data/2.5/forecast?q=${userInput}&APPID=25bc90a1196e6f153eece0bc0b0fc9eb`; //this is weathered


    console.log(URL_forecast);
    fetch(URL_forecast) //we have a string here
        .then((response) => {
            return response.json();
        }) //now we have an abject
        .then(get_weather_forecast_1)

    fetch(URL_forecast) //we have a string here
        .then((response) => {
            return response.json();
        }) //now we have an abject
        .then(get_weather_forecast_2)

};

city_search.addEventListener("change", searchInput); //mdn 에서 event reference, change 검색해봐