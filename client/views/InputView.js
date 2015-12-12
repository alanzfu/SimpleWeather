var InputView = Backbone.View.extend({

  initialize: function(){
    this.render();
    //controller for submitting zipcode
  },

  render: function(){
    return this.$el.html('<input class="zipcode-entry">Type in a zipcode and press enter<input>');
  }
  
})