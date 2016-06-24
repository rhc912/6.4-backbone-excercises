var Backbone = require('backbone');
var ThisForm = require('../templates/index.hbs');
// var _ = require('underscore');

var PostModel = Backbone.Model.extend({
  idAttribute: '_.id'
});

var PostCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/',
})

module.exports = {
  'PostModel': PostModel,
  'PostCollection': PostCollection,
  //'ThisForm': PostForm
}
