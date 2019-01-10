describe('awkwardDancer', function() {

  var awkwardDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    awkwardDancer = new makeAwkwardDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(awkwardDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it animate', function() {
    sinon.spy(awkwardDancer.$node, 'animate');
    awkwardDancer.step();
    expect(awkwardDancer.$node.animate.called).to.be.true;
  });
});
