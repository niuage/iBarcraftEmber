App.Router.map(function(match) {
  match("/").to("home");
  match("/barcrafts").to("barcrafts");
  match("/barcrafts/:barcraft_id").to("barcraft")
});

App.HomeRoute = Ember.Route.extend({
  renderTemplate: function() {
    console.log("ok...")
    this.render('barcrafts', {
      outlet: "sidebar"
    })
    this.render('barcraft')
  },

  setupController: function(controller, model) {

    var barcrafts = App.Barcraft.find();
    controller.set('barcrafts', barcrafts);
    controller.set('barcraft', App.Barcraft.find());
  }
});

// App.BarcraftRoute = Ember.Route.extend({
//   renderTemplate: function() {
//     console.log("yo")

//     this.render('barcrafts', {
//       outlet: "sidebar"
//     })

//     this.render('barcraft')

//     this._super();
//   },
//   setupController: function(controller, model) {
//     this._super();
//     console.log("setup")
//     controller.set('content', model);
//     // if (!controller.get('barcrafts') || controller.get('barcrafts').length == 0) {
//       var barcrafts = App.Barcraft.find();
//       controller.set('barcrafts', barcrafts);
//     // }
//   }
// })

App.SearchController = Ember.ArrayController.extend({
  query: ""
})
