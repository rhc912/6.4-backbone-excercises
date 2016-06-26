var Backbone = require('backbone');

var Blogger = Backbone.Model.extend({
  
  idAttribute: '_id',
});

var BloggerCollection = Backbone.Collection.extend({
    model: Blogger,
    url: 'http://tiny-lasagna-server.herokuapp.com/collections/robbed',
})

module.exports = {
  'Blogger': Blogger,
  'BloggerCollection': BloggerCollection
}
