var MakeGoomba = function(top, left, timeBetweenSteps) {
  MakeSmoothDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="goomba"></span>');
  this.y = window.$('body').height() * 3.54/4;
  this.Yrelevance = false;
  this.setPosition(this.y, left);
  this.step('shimmy', timeBetweenSteps)
}

MakeGoomba.prototype = Object.create(MakeSmoothDancer.prototype);
MakeGoomba.prototype.constructor = MakeGoomba;

