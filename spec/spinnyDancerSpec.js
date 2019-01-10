describe('spinnyDancer', function() {

  var spinnyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinnyDancer = new makeSpinnyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinnyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it fade out', function() {
    sinon.spy(spinnyDancer.$node, 'fadeOut');
    spinnyDancer.step();
    expect(spinnyDancer.$node.fadeOut.called).to.be.true;
  });
  
  it('should have a step function that makes it fade in', function() {
    sinon.spy(spinnyDancer.$node, 'fadeIn');
    spinnyDancer.step();
    expect(spinnyDancer.$node.fadeIn.called).to.be.true;
  });
});
