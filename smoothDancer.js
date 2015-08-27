var MakeSmoothDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps)

  this.step('shimmy', timeBetweenSteps * 3);
}

MakeSmoothDancer.prototype = Object.create(MakeDancer.prototype);
MakeSmoothDancer.prototype.constructor = MakeSmoothDancer
MakeSmoothDancer.prototype.shimmy = function() {
  // body...
  var context = this;
  this.$node.animate({'left':'2%'}, 500});
};
