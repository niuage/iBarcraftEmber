var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

App.SearchFormView = Ember.View.extend({
  tagName: "form",

  queryInput: Ember.TextField.extend({
    keyUp: function(e) {
      var field = $(e.currentTarget),
      that = this;
      delay(function() {
        that.get('controller').set('barcrafts', App.Barcraft.find({ where: field.val() }));
      }, 300)
    }
  })
})
