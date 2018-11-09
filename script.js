//https://github.com/karbassi/idx-528/blob/master/week-10/assignment/README.md

//toddmotto/public-apis

let city_search = document.querySelector("#city-search");
console.log(city_search);

const getWeather = (data) => {
    let firstShow = data[0]; //to get array item 제일 위에 올라오는 애 (즉[0]가 가장 스코어가 높은 애거든)
    console.log(firstShow.show.id, firstShow.show.name, firstShow.show.language); //to get an object item (object(variable)name.nameofthe objectyouwant)
    console.log(firstShow.show);

    let show_title = document.getElementById("show-title");
    show_title.innerText = firstShow.show.name;

    let show_image = document.getElementById("show-image");
    show_image.src = firstShow.show.image.medium; //=imgurl 넣어야하는데 뭔가 안된다

    let show_summary = document.getElementById("show-summary");
    show_summary.innerHTML = firstShow.show.summary; //innerText썼더니 <p></p> 같이 나와
};

const searchInput = (event) => {
    console.log(event); //페이지에서 빈칸에 뭔가 쓰고서 tab을 눌러야 그 창에서 나와서 change로 읽혀서 콘솔에 뭔가 로그가 돼
    let element = event.target;
    let userInput = element.value;
    console.log(userInput); //whatever the user types in anything here, that anything is console.logged

    let URL = `http://api.tvmaze.com/search/shows?q=${userInput}`;
//api.openweathermap.org/data/2.5/weather?q={city name},{country code}&APPID=25bc90a1196e6f153eece0bc0b0fc9eb
//why the freakin heck is temp in kelvin?



    //let URL = "http://api.tvmaze.com/search/shows?q=" + userInput; // <-이거 위와 똑같아
    console.log(URL);
    fetch(URL) //we have a string here
        .then((response) => {
            return response.json();
        }) //now we have an abject
        .then(getShow)
};

showSearch.addEventListener("change", searchInput); //mdn 에서 event reference, change 검색해봐