var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinnyDancer"></span>');
  this.setPosition(top, left);
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.fadeOut('slow').fadeIn('slow');
};