var WeatherEntryView = Backbone.View.extend({

  template: _.template('<p>It is  <%= temp %> degrees in <%= city %>.</p>'),

  initialize: function(){
    //controller event handler lives here
    this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }


})