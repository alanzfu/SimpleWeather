var AppModel = Backbone.Model.extend({

  initialize: function(){
    this.set('weatherCollection', new WeatherCollection());
  }


});