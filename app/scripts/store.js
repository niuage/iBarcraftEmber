App.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create({
    bulkCommits: false,
    url: "http://api.ibarcraft.com/v1",
    serializer: DS.JSONSerializer.extend({
      extractMany: function(loader, json, type, records) {
        var root = this.rootForType(type),
        roots = this.pluralize(root);

        json = reformatJSON(root, roots, json);
        this._super(loader, json, type, records);
      }
    })
  })
});

var reformatJSON = function(root, roots, json) {
  var newJSON = {}
  json = $.map(json, function(e, i) {
    return e[root];
  });
  newJSON[roots] = json;
  return newJSON;
}
