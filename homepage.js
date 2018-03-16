// Add Google Maps
function myMap()
{
  myCenter=new google.maps.LatLng(42.056491, -87.675074);
  var mapOptions= {
    center:myCenter,
    zoom:15, scrollwheel: false, draggable: true,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    panControl:false,
    streetViewControl:false,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var coordinates = [
          {lat: 42.056224, lng: -87.675891},
          {lat: 42.056256, lng: -87.677178},
          {lat: 42.058367, lng: -87.677135},
          {lat: 42.058423, lng: -87.681620}
        ];

  var path = new google.maps.Polyline({
    path:coordinates,
    geodesic: true,
    strokeColor:'#D60A27',
    strokeOpacity:1.0,
    strokeWeight:2
  });
  path.setMap(map);
}

//relocate to share feed
  $("#share").click(function(){
      window.location = "discuss.html";
    });
//get UV data
    $.getJSON('https://api.openweathermap.org/data/2.5/uvi?appid=21e31e097b4e1d59b2850dca5beb0f95&lat=42.045597&lon=-87.688568', function(uvdata) {
      //data is the JSON string
      console.log(uvdata.value);
      if (uvdata.value < 3){
        $("#weather-image").attr("src","images/green.png");
        $("#weather-image").attr("title","low danger from the sun's UV rays");
        $("#uv-level").html("&nbsp &nbsp UV-level: GREEN, low danger");
        $("#uv-level").attr("style","color:green")
        $("#sunscreen").attr("style","color:green")
        $("#uv-descp").html("A UV Index reading of 0 to 2 means low danger from the sun's UV rays for the average person. Wear sunglasses on bright days. If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen. Bright surfaces, such as sand, water and snow, will increase UV exposure.");
      }
      else if (uvdata.value < 6){
        $("#weather-image").attr("src","images/yellow.png");
        $("#weather-image").attr("title","moderate risk of harm from unprotected sun exposure.");
        $("#uv-level").html("&nbsp &nbsp UV-level: YELLOW, moderate");
        $("#uv-level").attr("style","color:#F6E332")
        $("#sunscreen").attr("style","color:#F6E332")
        $("#uv-descp").html("Stay in shade near midday when the sun is strongest. If outdoors, wear sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.");
      }
      else if (uvdata.value < 8){
        $("#weather-image").attr("src","images/orange.png");
        $("#weather-image").attr("title","high risk of harm from unprotected sun exposure.");
        $("#uv-level").html("&nbsp &nbsp UV-level: ORANGE, high");
        $("#uv-level").attr("style","color:orange")
        $("#sunscreen").attr("style","color:orange")
        $("#uv-descp").html("Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.");
      }
      else if (uvdata.value < 11){
        $("#weather-image").attr("src","images/red.png");
        $("#weather-image").attr("title","very high risk of harm from unprotected sun exposure.");
        $("#uv-level").html("&nbsp &nbsp UV-level: RED, very high");
        $("#uv-level").attr("style","color:red")
        $("#sunscreen").attr("style","color:red")
        $("#uv-descp").html("Minimize sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.");
      }
      else if (uvdata.value >= 11){
        $("#weather-image").attr("src","images/violet.png");
        $("#weather-image").attr("title","extreme risk of harm from unprotected sun exposure.");
        $("#uv-level").html("&nbsp &nbsp UV-level: RED, extreme");
        $("#uv-level").attr("style","color:violet")
        $("#sunscreen").attr("style","color:violet")
        $("#uv-descp").html("Try to avoid sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. ");
      }
    });

//get weather data
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?appid=21e31e097b4e1d59b2850dca5beb0f95&q=Evanston&units=imperial', function(weather) {
      var icon = weather.weather[0].icon;
      console.log(weather);
      var description = weather.weather[0].description;
      console.log(description);
      var temp = weather.main.temp;
      console.log(weather.main.temp);
      $("#weather-icon").attr("src","https://openweathermap.org/img/w/"+icon+".png");
      $("#description").html("It is "+description+" now. The tempreture now is "+temp+" F.");
    });

//get tempreture data and visulize with chart
  $.getJSON('https://api.openweathermap.org/data/2.5/forecast?appid=07bde491725b1652e1e12d1fd371d8b8&q=Evanston&units=imperial',function(data){
    console.log(data.list[0].main.temp);
    var dom = document.getElementById("tempcontainer");
    var myChart = echarts.init(dom);
    var app = {};
    var date=[data.list[0].dt_txt.substring(11,16),data.list[1].dt_txt.substring(11,16),data.list[2].dt_txt.substring(11,16),data.list[3].dt_txt.substring(11,16),data.list[4].dt_txt.substring(11,16),data.list[5].dt_txt.substring(11,16)];
    console.log(date);
    var temp = [data.list[0].main.temp,data.list[1].main.temp,data.list[2].main.temp,data.list[3].main.temp,data.list[4].main.temp,data.list[5].main.temp]
    option = null;
    option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
            name: 'Time'
        },
        yAxis: {
            type: 'value',
            name: 'Temperature (F)'
        },
        series: [{
            data: temp,
            type: 'line',
            areaStyle: {}
        }]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
  });
