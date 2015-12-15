var WeatherCollectionView = Backbone.View.extend({
  tagName: 'div',


  initialize: function(){
    this.collection.on('add', this.render, this);
    this.collection.on('change', this.render, this);
  },

  render: function(){
     //overwrite when rendering
    this.$el.append(this.collection.map(function(weatherEntry){
      var weatherEntryView = new WeatherEntryView({model: weatherEntry})
      return weatherEntryView.render();
    }))

  }

})