//https://github.com/karbassi/idx-528/blob/master/week-10/assignment/README.md
//why the freakin heck is temp in kelvin?
//48K − 273.15 = -225.1°C

let city_search = document.querySelector("#city-search");
console.log(city_search);

const get_weather_current = (data) => {
    let weather_temp_now_current = data.main.temp;
    let weather_summary_current = data.weather[0].main;
    let weather_icon_current = data.weather[0].icon;let weather_temp_max_current = data.main.temp_max;
    let weather_temp_min_current = data.main.temp_min;
    
    console.log(weather_temp_now_current,weather_summary_current, weather_icon_current, weather_temp_max_current,weather_temp_min_current);
    
    let on_page_temp_now_current = document.getElementById("on-page-temp-now-current");
    on_page_temp_now_current.innerText = weather_temp_now_current;

    let on_page_summary_current = document.getElementById("on-page-summary-current");
    on_page_summary_current.innerText = weather_summary_current;

    let on_page_icon_current = document.getElementById("on-page-icon-current");
    on_page_icon_current.src =`http://openweathermap.org/img/w/${weather_icon_current}.png`; //x.src=imgurl

    let on_page_temp_max_current = document.getElementById("on-page-temp-max-current");
    on_page_temp_max_current.innerHTML = weather_temp_max_current;

    let on_page_temp_min_current = document.getElementById("on-page-temp-min-current");
    on_page_temp_min_current.innerHTML = weather_temp_min_current;
};

const get_weather_forecast = (data) => {
  
    let weather_summary_forecast = data.list[7].weather[0].main;
    let weather_icon_forecast = data.list[8*1 /* i */ -1].weather[0].icon;
    let weather_temp_max_forecast = data.list[8*1 /* i */ -1].main.temp_max;
    let weather_temp_min_forecast = data.list[8*1 /* i */ -1].main.temp_min;
    console.log(weather_summary_forecast, weather_icon_forecast, weather_temp_max_forecast,weather_temp_min_forecast);

    let on_page_summary_forecast = document.getElementById("on-page-summary-forecast");
    on_page_summary_forecast.innerText = weather_summary_forecast;

    let on_page_icon_forecast = document.getElementById("on-page-icon-forecast");
    on_page_icon_forecast.src =`http://openweathermap.org/img/w/${weather_icon_forecast}.png`; //x.src=imgurl

    let on_page_temp_max_forecast = document.getElementById("on-page-temp-max-forecast");
    on_page_temp_max_forecast.innerHTML = weather_temp_max_forecast;

    let on_page_temp_min_forecast = document.getElementById("on-page-temp-min-forecast");
    on_page_temp_min_forecast.innerHTML = weather_temp_min_forecast;
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
        .then(get_weather_forecast)
};

city_search.addEventListener("change", searchInput); //mdn 에서 event reference, change 검색해봐