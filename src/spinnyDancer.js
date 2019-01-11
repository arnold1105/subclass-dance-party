var SpinnyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinnyDancer');
};

SpinnyDancer.prototype = Object.create(Dancer.prototype);

SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.fadeOut('slow').fadeIn('slow');
};