var MakeSmoothDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="smooth-dancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps)

  this.rightWall = false;
  this.bottomWall = false;
  this.step('shimmy', timeBetweenSteps)
};

MakeSmoothDancer.prototype = Object.create(MakeDancer.prototype);
MakeSmoothDancer.prototype.constructor = MakeSmoothDancer;

MakeSmoothDancer.prototype.shimmy = function() {
  var context = this;
  if (!context.rightWall) {
    context.x = context.x + 40;
    context.$node.animate({'left': context.x + 'px'}, {queue: false, duration: 500}) 
    if (context.x > window.$('body').width()) {
      context.rightWall = true;
    }
  } 
  if (context.rightWall) {
    context.x = context.x - 40;
    context.$node.animate({'left': context.x + 'px'}, {queue: false, duration: 500})
    if (context.x < 0) {
      context.rightWall = false;
    }
  }
  if (!context.bottomWall) {
    context.y = context.y + 40;
    context.$node.animate({'top': context.y + 'px'}, {queue: false, duration: 500})
    if (context.y > window.$('body').height()) {
      context.bottomWall = true;
    }
  }
  if (context.bottomWall) {
    context.y = context.y - 40;
    context.$node.animate({'top': context.y + 'px'}, {queue: false, duration: 500})
    if (context.y < 0) {
      context.bottomWall = false;
    }
  }

};



// MakeSmoothDancer.prototype.shimmyLeft = function() {
//   var context = this;
//   setTimeout(function() {
//     context.x = context.x - 40;
//     context.$node.animate({'left': context.x + 'px'}, {queue: false, duration: 500}) 
//     if (context.x > 0) {
//       context.shimmyLeft();
//     } else {
//       context.shimmyRight();
//     }
//   }, 500);

// };

// MakeSmoothDancer.prototype.shimmyUp = function() {
//   var context = this;
//   setInterval(function() { 
//     if (context.y > window.$('body').height()) {
//       context.y = context.y - 25;
//       context.$node.animate({'top': context.y + 'px'},{queue: false, duration: 500})
//       context.shimmyUp();
//     } else {
//       context.y = context.y + 25;
//       context.$node.animate({'top': context.y + 'px'},{queue: false, duration: 500}) 
//       context.shimmyUp();
//     }
//   }, 500);

// };


// MakeSmoothDancer.prototype.shimmyUp = function() {
//   var context = this;
//   setTimeout(function() {
//     context.y = context.y + 40;
//     context.$node.animate({'top': context.y + 'px'},{queue: false, duration: 500})  
//     if (context.y > 0) {
//       context.shimmyDown();
//     } else {
//       context.shimmyUp();
//     }
//   }, 500);

// };





