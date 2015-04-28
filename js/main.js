$(document).ready(function() {
var ConainerView = Backbone.View.extend({
el: $('#ri-container'),

initialize: function() {
this.render();
},

render: function() {
$(this.el).append("<h1>Hello Moodle!</h1>");
}
});

var helloView = new ConainerView();


});
