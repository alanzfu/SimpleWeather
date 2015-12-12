var HeadingView = Backbone.View.extend({
  initialize: function(){
    this.render();
    console.log('heading initialzied')
  },

  render: function(){
    console.log('heading called');
    return this.$el.html('<h1>Simple Weather</h1>');
  }

})