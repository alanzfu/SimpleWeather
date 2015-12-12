var WeatherCollectionView = Backbone.View.extend({
  el: '<div>',


  initialize: function(){
    this.collection.on('change', this.render, this);
  },

  render: function(){
    this.$el.html('<div><div>'); //overwrite when rendering
    this.$el.append(this.collection.map(function(weatherEntry){
      var weatherEntryView = new WeatherEntryView({model: weatherEntry}).render();
    }))

  }

})