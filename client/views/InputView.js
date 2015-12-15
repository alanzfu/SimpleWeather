var InputView = Backbone.View.extend({
  tagName: 'input',

  events: {
   'keyup': 'keyAction',
  },

  initialize: function(){
    this.render();
  },

  keyAction: function(e){
    var userInput = $('input').val();
    if(e.which === 13){
      this.collection.addWeather(userInput);
    }

  },


  render: function(){
    return this;
  }

})