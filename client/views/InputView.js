var InputView = Backbone.View.extend({

  initialize: function(){
    this.render();
    //controller for submitting zipcode
  },

  events: {
    'enter key'
  }

  render: function(){
    return this.$el.html('<input placeholder="Type in a zipcode and press enter"class="zipcode-entry"></input></br>');
  }

})