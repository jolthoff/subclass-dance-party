// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.y = top;
  this.x = left;
  this.step(undefined, timeBetweenSteps);
  

  this.whoAmI();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

MakeDancer.prototype.whoAmI = function() {
  if(this instanceof MakeBulletBill){
    this.name = 'b' + window.dancers.length;
  } else {
    this.name = window.dancers.length;
  }
  window.distances[this.name] = this;
}

MakeDancer.prototype.step = function(callback, timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setInterval(function() {
    if (callback && !context[callback]) {
      return context.$node[callback]();
    } else if (callback && context[callback]) {
      return context[callback]();
    } else {
      return context.step;
    }
  }, timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.y = top;
  this.x = left;

  // var styleSettings = {
  //   top: this.y,
  //   left: this.x
  // };
  this.$node.animate({'top': this.y, 'left': this.x}, {queue: false, duration: 600});
};

MakeDancer.prototype.checkCollision = function() {
  for(var key in window.distances){
    if(this.name != key){
      if(this.distance(this.x, this.y, window.distances[key].x, window.distances[key].y) < 60){
        if(key.charAt(0) === 'b') {
          this.die();
        } else {
          return true;
        }
      }
    }
  } 
}

MakeDancer.prototype.die = function() {
  var context = this.$node;

  context.css({'transform': 'scale(-5)'});
  context.css({'opacity': '0'})
  setTimeout(function() {
    context.remove();
  }, 1200)
  
}

MakeDancer.prototype.distance = function(x1, y1, x2, y2) {
  var dist = Math.sqrt(((y2 - y1)*(y2 - y1)) + ((x2 - x1)*(x2 - x1)));
  return dist;
}

MakeDancer.prototype.flipImage = function() {

  var styleSettings = {
        transform: 'scaleX(-1)',
        filter: 'FlipH'
      }
  this.$node.css(styleSettings);
}

MakeDancer.prototype.returnImage = function() {

  var styleSettings = {
    transform: 'scaleX(1)',
    filter: 'FlipH'
  }
  this.$node.css(styleSettings);
}