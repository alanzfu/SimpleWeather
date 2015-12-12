var AppView = Backbone.View.extend({
  el: '#app',

  initialize: function(){
    this.weatherCollectionView = new WeatherCollectionView({collection: this.model.get('weatherCollection')});
    this.inputView = new InputView({collection: this.model.get('weatherCollection')});
    this.headingView = new HeadingView();
    
    this.render();
  },

  render: function(){
    var html = [
      this.headingView.$el.html(),
      this.inputView.$el.html(),
      this.weatherCollectionView.$el.html()
    ].join('');

    this.$el.append(html);
    return this;
  }
})