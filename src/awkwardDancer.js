var makeAwkwardDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="awkwardDancer"></span>');
  this.setPosition(top, left);
};

makeAwkwardDancer.prototype = Object.create(makeDancer.prototype);

makeAwkwardDancer.prototype.constructor = makeAwkwardDancer;

makeAwkwardDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.animate({opacity: '0.5'});
};