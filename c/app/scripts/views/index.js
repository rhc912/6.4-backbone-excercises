var Backbone = require('backbone');
var $ = require('jquery');
var blogFormItem = require('../templates/index.hbs');
var FormList = require('../templates/indexlist.hbs');
var models = require('../models/post');

var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  template: blogFormItem,
  events: {
    'submit': 'addTitle'
  },
  render: function(){
    var renderedHtml = this.template();
    this.$el.html(renderedHtml);
    return this;
  },
  addTitle: function(event){
    event.preventDefault();
    this.collection.create({
      name: $('#name').val(),
      url: $('#url').val()
    });
    $('#name').val('');
    $('#url').val('');
  }
});

var BlogListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(blog){
    console.log('blog', blog);
    var blogItem = new BlogItemView({model: blog});
    this.$el.append(blogItem.render().el);
  }
});

var BlogItemView = Backbone.View.extend({
  tagName: 'li',
  template: FormList,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

var BlogDetailView = Backbone.View.extend({
  render: function(){
    this.$el.html(this.model.get('url'));
    return this;
  }
})

module.exports = {
  'BlogFormView': BlogFormView,
  'BlogListView': BlogListView,
  'BlogItemView': BlogItemView
}
