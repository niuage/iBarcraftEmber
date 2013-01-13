// Requires Ember-Data
App.Store = DS.Store.extend({
  revision: 11,
  // adapter: DS.RESTAdapter.create({})
  adapter: DS.RESTAdapter.create({
    bulkCommits: false,
    url: "http://api.ibarcraft.com/v1/"

  })
});
