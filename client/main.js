$(document).ready(function(){
  var appView = new AppView({model: new App()});
  $('body').append(appView);
});