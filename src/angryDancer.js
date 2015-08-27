var MakeAngryDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="angry"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.step('getAngry', timeBetweenSteps * 2);
  this.angry = false;
};

MakeAngryDancer.prototype = Object.create(MakeDancer.prototype);
MakeAngryDancer.prototype.constructor = MakeAngryDancer;

MakeAngryDancer.prototype.getAngry = function() {
  var context = this;
  if (!context.angry) {
    context.$node.animate({'height': '50px', 'width':'50px', 'border-radius': '100%'}, 400);
    context.angry = true;
  } else {
      context.$node.animate({'height': '8px', 'width':'8px'}, 400);
      context.angry = false;
  }
};