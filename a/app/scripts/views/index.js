var Backbone = require('backbone');
// var handlebars = require('handlebars');
var $ = require('jquery');
// var PostForm = require('../templates/index.hbs');
var model = require('../models/post');
var blogPostForm = require('../templates/index.hbs');
console.log('model: ', model);


console.log(BlogPostHeader);
var BlogPostHeader = Backbone.View.extend({
  tagName: 'h1',
  attributes: {
    id: 'header',
    className: 'col-md-12'
  },
  render: function(){
    this.$el.html("Rob's Blog Post");
    return this;
  }
});
var PostForm = Backbone.View.extend({
  tagName: 'form',
  className: 'col-md-12',
  template: blogPostForm,
  events: {
    'submit': 'addPostForm'
  },

  render: function(){
    this.$el.append(this.template());
    return this;
  }
});




module.exports = {
  'BlogPostHeader': BlogPostHeader,
  'PostForm': PostForm
};
