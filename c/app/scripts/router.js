var Backbone = require('backbone');
var models = require('./models/post');
var views = require('./views/index');
var $ = require('jquery');

var TheAppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id': 'detail'
  },
  initialize: function(){
    this.collection = new models.BloggerCollection();
  },
  index: function(){
    var blogForm = new views.BlogFormView({collection: this.collection});
    $('.app').html(blogForm.render().el);

    var blogListing = new views.BlogListView({collection: this.collection});
    $('.app').append(blogListing.render().el);

    this.collection.fetch();

  },
  detail: function(blogId){
    this.collection.fetch().done(function(){
      var blog = this.collection.get(blogId);
      var blogDetail = new views.BlogDetailView({model: blog});

      $('.app').html(blogDetail.render().el);
    }.bind(this));
  }

});

var router = new TheAppRouter();

module.exports = router;
