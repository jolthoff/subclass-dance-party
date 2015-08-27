var BouncyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.step(timeBetweenSteps);


};

BouncyDancer.prototype = Object.create(MakeDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(timeBetweenSteps) {
  var context = this;
  setInterval(function() { context.setPosition() }, timeBetweenSteps);
};