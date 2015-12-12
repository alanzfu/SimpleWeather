var HeadingView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function(){
    return this.$el.html('<h1>Simple Weather</h1>');
  }

})