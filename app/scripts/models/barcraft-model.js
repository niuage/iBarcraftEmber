var attr = DS.attr;

App.Barcraft = DS.Model.extend({
  title: attr('string'),
  description: attr('string')
})
// .reopenClass({
//   url: "/barcrafts"
// })

// App.Barcraft.reopenClass({
//   source: "http://api.ibarcraft.com/v1/barcrafts?when=past",
//   _listOfBarcrafts: Em.A(),

//   all: function() {
//     console.log("all barcrafts")
//     var allBarcrafts = this._listOfBarcrafts;

//     $.ajax({
//       url: this.source,
//       dataType: "json",
//       success: function(data) {
//         allBarcrafts.clear();
//         allBarcrafts.pushObjects(data);
//       }
//     })

//     return allBarcrafts;
//   },

//   find: function(id) {
//     var barcraft = App.Barcraft.createRecord();

//     $.getJSON('http://api.ibarcraft.com/v1/barcrafts/' + id, function(data) {
//       barcraft.setProperties(data.barcraft)
//     });

//     barcraft.set("id", id);

//     return barcraft;
//   }
// })
