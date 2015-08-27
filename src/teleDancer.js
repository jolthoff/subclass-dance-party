var TeleDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="tele-dancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.step('teleport', timeBetweenSteps);


};

TeleDancer.prototype = Object.create(MakeDancer.prototype);
TeleDancer.prototype.constructor = TeleDancer;

TeleDancer.prototype.teleport = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.x = window.$("body").height() * Math.random();
  this.y = window.$("body").width() * Math.random();

  var styleSettings = {
    top: this.x,
    left: this.y
  };
  this.$node.css(styleSettings);
};

