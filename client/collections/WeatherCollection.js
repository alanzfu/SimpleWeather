var WeatherCollection = Backbone.Collection.extend({
  model: WeatherEntry,

  initialize: function(){
    
  },
  addWeather: function(zipcode){
    //ajax request to weather
    $.get('http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b', 
      function(data){
        this.add(new WeatherEntry({city: data.name, zipcode: zipcode, temp: data.main.temp}));
    }.bind(this))
    console.log('anything');
  }
})