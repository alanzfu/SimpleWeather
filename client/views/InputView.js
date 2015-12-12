var InputView = Backbone.View.extend({

  initialize: function(){
    this.render();
    //controller for submitting zipcode
  },

  events: {
   'enter input': function(e){
      console.log('enter key was pressed');
   }
   
  },

  render: function(){
    return this.$el.html('<input rows=2 placeholder="Type in a zipcode and press Enter"class="zipcode-entry"></input></br>');
  }

})