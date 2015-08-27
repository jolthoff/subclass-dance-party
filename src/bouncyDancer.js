var BouncyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.step('bounce', timeBetweenSteps);


};

BouncyDancer.prototype = Object.create(MakeDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.bounce = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.vertical = window.$("body").height() * Math.random();
  this.horizontal = window.$("body").width() * Math.random();

  var styleSettings = {
    top: this.vertical,
    left: this.horizontal
  };
  this.$node.css(styleSettings);
};

