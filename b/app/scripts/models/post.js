var Backbone = require('backbone');
var ContactForm = require('../templates/index.hbs');

var ContactModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var PostCollection = Backbone.Collection.extend({
  model: ContactModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/robbed',
});

module.exports = {
  'ContactModel': ContactModel,
  'PostCollection': PostCollection,
}
