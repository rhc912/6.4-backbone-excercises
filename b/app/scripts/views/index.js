var Backbone = require('backbone');
var $ = require('jquery');
var models = require('../models/post');
var contactForm = require('../templates/index.hbs');
//console.log('model:', model);

var ContactPostHeader = Backbone.View.extend({
  tagName: 'h1',
  attributes: {
    id: 'header',
    className: 'col-md-12'
  },
  render: function(){
    this.$el.html("Contact Information");
    return this;
  }
});
var InformationForm = Backbone.View.extend({
  tagName: 'form',
  className: 'col-md-12',
  template: contactForm,
  events: {
    'submit': 'addPostForm'
  },
  addPostForm: function(event){
    event.preventDefault();
    //console.log(this.collection);
    this.collection.create({'firstname': $('#new-first-name').val(),'lastname': $('#new-last-name').val(), 'Address': $('#new-address').val(),'PhoneNumber': $('#new-phone').val()});
  },
  render: function(){
    this.$el.append(this.template());
    return this;
  }
})

module.exports = {
  'ContactPostHeader': ContactPostHeader,
  'InformationForm': InformationForm
}
