var Collider = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="collider"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.step('findCollision');

}

Collider.prototype = Object.create(MakeDancer.prototype)
Collider.prototype.constructor = Collider;

Collider.prototype.findCollision = function() {
  var target = document.getElementByClass('collider')
  console.log(target.getBoundingClientRect())
}