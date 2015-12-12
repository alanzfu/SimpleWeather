var WeatherEntryView = Backbone.View.extend({

  tagName: 'p',

  template: _.template('It is  <%= temp %> degrees in <%= city %>.'),

  initialize: function(){
    //controller event handler lives here
    this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes))
  }


})