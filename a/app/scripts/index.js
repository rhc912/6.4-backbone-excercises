//var Backbone = require('backbone');
// var handlebars = require('handlebars');
var $ = require('jquery');
var view = require('./views/index');
var PostCollection = require('./models/post').PostCollection;
//var ThisForm = require('../templates/index.hbs');


var header = new view.BlogPostHeader();
console.log(header);
$('.app').append(header.render().el);
// $('.app').append(header.render().el);

var postForm = new view.PostForm();
console.log(postForm);
$('.app').append(postForm.render().el);
