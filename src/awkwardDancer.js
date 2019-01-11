var AwkwardDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('awkwardDancer');
};

AwkwardDancer.prototype = Object.create(Dancer.prototype);

AwkwardDancer.prototype.constructor = AwkwardDancer;

AwkwardDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.animate({opacity: '0.5'});
};
