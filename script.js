async function voo() {
  console.log("insidefunction");
  let vrs = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  console.log(vrs);
  let result = await vrs.json();
  console.log(result);
  for (let i in result) {
    let flag = "";
    //console.log(result[i].name);
    const request = new XMLHttpRequest();
    let url = "https://restcountries.com/v2/alpha/" + result[i].alpha2Code;
    request.open("GET", url)
    request.send()


    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        var data = JSON.parse(request.response);
        //console.log(data);
        flag = data.flags.png
        console.log("flag", flag);
        let div = document.createElement("div");
        div.style.color = "green";
        div.style.fontSize = "32px";
        div.innerHTML = `<div class="box">
    <div class="container">
   
    <div class="row">
  <div class="col-sm-5">
<div class="card">
        <h3 class="card-title">${result[i].name}</h3>
        <img src="${flag}"> 
        <div class="card-body">
          <p class="card-subtitle mb-4" >Capital:${result[i].capital}</p>
          <p class="card-text mb-2 ">Region:${result[i].region}</p>
          <h6 class="card-subtitle1">Latlng:${result[i].latlng}</h6>
          <a class="btn btn-primary" href="https://www.accuweather.com/en/us/link/37037/weather-forecast/2202992" role="button">GO TO WEATHER</a>
          </div>
          </div>
          </div>
          </div>
          </div>
          
      </div>
    </div>`;

        document.body.append(div);
       
      }
    }

  }
}
voo();

function getweatherdata(){ 
  const API_KEY='6dca03ca394187a065bdf74860c91a3e';
 Navigater.geolocation.getCurentpostion((success)=>{

  let {latitude,longitude} = success.coords;
  fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutly$units=metric&appid=${API_KEY}`).then(res=> res.json()).then(data =>{
    console.log(data)
    showWeatherData(data);
    var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary",);
button.innerHTML="button";
button.addEventListener("click");

  })

}) 

}
getweatherdata();
