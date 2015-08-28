var MakeBulletBill = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bullet-bill"></span>');
  //this.name = 'b' + window.dancers.length;
  this.fromLeft = false;
  if (this.x < 0) {
    this.fromLeft = true;
    this.$node.css(this.flipImage());
  }

  this.step('shoot', timeBetweenSteps);
  this.step('killSelf', 6000);
  this.setPosition(this.y, this.x);
}



MakeBulletBill.prototype = Object.create(MakeDancer.prototype);
MakeBulletBill.prototype.constructor = MakeBulletBill;

MakeBulletBill.prototype.shoot = function() {
  var context = this;
  var fromLeft;
  if(context.fromLeft){
    context.x = context.x + 30;
    context.$node.animate({'left': context.x + 'px'}, {queue: false, duration: 700})
  } else {
    context.x = context.x - 30;
    context.$node.animate({'left': context.x + 'px'}, {queue: false, duration: 700})
  }

};

MakeBulletBill.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: this.y,
    left: this.x
  };
  this.$node.css(styleSettings);
};

MakeBulletBill.prototype.killSelf = function() {
  if(this.x < -1000 || this.x > window.$('body').width() + 1000) {
    this.$node.remove();
  }

}
