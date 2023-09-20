const apiKey="7041010d623f49808baed63831840f31";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric"
const SearchBox=document.querySelector('.search input');
const SearchBtn=document.querySelector('.search Button');
let weatherImg=document.getElementById('WeatherImg');
// console.log(SearchBox.value)
async function checkWeather(city){
    // getting data from api
    let response=await fetch(apiUrl+`&q=${city}` +`&appid=${apiKey}`);
    // converting the recevied data in json
    if(response.status==404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display="none";
    }else{
        
        var data =await response.json();
        console.log(data);   
        // selecting and changing the data
         let newCity=document.getElementsByClassName('CityName')[0];
         newCity.innerHTML=data.name;
    
         let newtemp=document.getElementsByClassName('temp')[0];
         newtemp.innerHTML=Math.round(data.main.temp)+"°C";
    
         let minTemp=document.getElementById('min-temp')
         minTemp.innerHTML=Math.round(data.main.temp_min)+" °C";
    
         let maxTemp=document.getElementById('max-temp');
         maxTemp.innerHTML=Math.round(data.main.temp_max)+" °C";
    
        // console.log(maxTemp)
    
        let newHumidity=document.getElementById('humidity');
        newHumidity.innerHTML=data.main.humidity+" %";
    
        let newWindSpeed=document.getElementById('wind');
        // console.log(data.main.humidity);
        newWindSpeed.innerHTML=data.wind.speed+" Km/hr";
        // console.log();
        let weatherCondition=data.weather[0].main;
          
         if(weatherCondition=="Clear"){
            console.log("hi");
            weatherImg.src="images/clear.png"; 
         }else if(weatherCondition=="Clouds"){
            weatherImg.src="images/clouds.png"; 
         }else  if(weatherCondition=="Drizzle"){
             weatherImg.src="images/drizzle.png"; 
         }else if(weatherCondition=="Mist"){
             weatherImg.src="images/mist.png"; 
         }else  if(weatherCondition=="Snow"){
             weatherImg.src="images/snow.png"; 
         }else  if(weatherCondition=="Wind"){
             weatherImg.src="images/wind.png"; 
         }else  if(weatherCondition=="Rain"){
             weatherImg.src="images/rain.png"; 
         }else  if(weatherCondition=="Humidity"){
             weatherImg.src="images/humidity.png"; 
         }
        document.querySelector('.weather').style.display="block"
        document.querySelector('.error').style.display="none";
    }
    
}
 
SearchBtn.addEventListener("click",()=>{
    checkWeather(SearchBox.value);
})

