window.App.Router = Ember.Router.extend({
  enableLogging: true,
  root: Ember.Route.extend({

    home_path: Ember.Route.transitionTo('root.index'),
    index: Ember.Route.extend({
      route: '/',
      connectOutlets: function(router, context) {
        applicationController = router.get('applicationController');
        applicationController.connectOutlet("topnav", "topnav");
        applicationController.connectOutlet("body", "barcrafts", App.Barcraft.find());
      }
    }),

    barcrafts_path: Ember.Route.transitionTo('barcrafts.index'),
    barcraft_path: Em.Route.transitionTo('root.barcrafts.show'),
    barcrafts: Ember.Route.extend({
      route: "/barcrafts",

      index: Ember.Route.extend({
        route: "/",
        connectOutlets: function(router, barcraft) {
          applicationController = router.get('applicationController');
          applicationController.connectOutlet("topnav", "topnav");
          applicationController.connectOutlet('body', 'barcrafts', App.Barcraft.find());
        }
      }),

      show: Ember.Route.extend({
        route: "/:id",
        enter: function ( router ){
          console.log("The shoe detail sub-state was entered.");
        },
        serialize:  function(router, barcraft) {
          return { id: barcraft.id || barcraft.barcraft.id }
        },
        deserialize:  function(router, barcraft) {
          console.log('deserialize')
          return App.Barcraft.find(barcraft.id);
        },
        connectOutlets: function(router, barcraft) {
          console.log(barcraft);
          applicationController = router.get('applicationController');
          applicationController.connectOutlet("topnav", "topnav");
          applicationController.connectOutlet('body', 'barcraft', barcraft.barcraft || barcraft);
        }
      })
    })
})
});

