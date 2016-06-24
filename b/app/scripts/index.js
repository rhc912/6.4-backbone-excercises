var $ = require('jquery');
var view = require('./views/index');
var PostCollection = require('./models/post').PostCollection;

var postCollection = new PostCollection();

var header = new view.ContactPostHeader();
console.log(header);
$('.app').append(header.render().el);

var informationForm = new view.InformationForm({'collection': postCollection});
console.log(informationForm);
$('.app').append(informationForm.render().el);



postCollection.fetch();
