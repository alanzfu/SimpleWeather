var WeatherCollectionView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('change', this.render, this);
  }

  render: function(){
    
  }

})