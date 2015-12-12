var WeatherCollectionView = Backbone.View.extend({
  tagName: 'div',

  initialize: function(){
    this.collection.on('change', this.render, this);
  },

  render: function(){
    //returns $el
  }

})