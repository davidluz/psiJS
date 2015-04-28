$(document).ready(function() {

// Container View
var ContainerView = Backbone.View.extend({
el: $('#ri-container'),
initialize: function() {
this.render();
},
render: function() {
$(this.el).append("<h1>Hello Moodle!</h1>");
}
});

//Dependencies
var Dependencies = Backbone.View.extend({
el: $('#ri-dependencies'),
initialize: function() {
this.render();
},
render: function() {
$(this.el).append("<script>js/arquivo.js</script>");
}
});


var helloView = new ContainerView();
var Dependencia1 = new Dependencies();

});


