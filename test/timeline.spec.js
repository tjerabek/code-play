import timeline from '../src/timeline';
describe('timeline', function () {
  it('steps • add a step without timing', function () {
    var testTimeLine = timeline({
      target: 'terminal',
    });
    testTimeLine.add({
      input: 'test input'
    });
    expect(testTimeLine.steps.length).toBe(1);
    expect(testTimeLine.steps[0].startTime).toBe(0);
    expect(testTimeLine.steps[0].endTime).toBe(0);
    expect(testTimeLine.steps[0].options.input).toBe('test input');
  });
  it('steps • add a step with animation', function () {
    var testTimeLine = timeline({
      target: 'terminal',
    });
    testTimeLine.add({
      input: 'test input',
      animated: true,
      characterSpeed: 10
    });
    expect(testTimeLine.steps.length).toBe(1);
    expect(testTimeLine.steps[0].startTime).toBe(0);
    expect(testTimeLine.steps[0].endTime).toBe(100);
    expect(testTimeLine.steps[0].options.input).toBe('test input');
  });
  it('steps • add a step with delay', function () {
    var testTimeLine = timeline({
      target: 'terminal',
    });
    testTimeLine.add({
      input: 'test input',
      delay: 42,
    });
    expect(testTimeLine.steps.length).toBe(1);
    expect(testTimeLine.steps[0].startTime).toBe(42);
    expect(testTimeLine.steps[0].endTime).toBe(42);
    expect(testTimeLine.steps[0].options.input).toBe('test input');
  });
  it('steps • add a step with delay and animation', function () {
    var testTimeLine = timeline({
      target: 'terminal',
    });
    testTimeLine.add({
      input: 'test input',
      delay: 42,
      animated: true,
      characterSpeed: 10,
    });
    expect(testTimeLine.steps.length).toBe(1);
    expect(testTimeLine.steps[0].startTime).toBe(42);
    expect(testTimeLine.steps[0].endTime).toBe(142);
    expect(testTimeLine.steps[0].options.input).toBe('test input');
  });
  it('steps • add multiple steps', function () {
    var testTimeLine = timeline({
      target: 'terminal',
    });
    testTimeLine.add({
      input: 'test input 1',
      delay: 10,
    });
    testTimeLine.add({
      input: 'test input 2',
      animated: true,
      characterSpeed: 10,
    });
    testTimeLine.add({
      input: 'test input 3',
      delay: 10,
      animated: true,
      characterSpeed: 10,
    });
    expect(testTimeLine.steps.length).toBe(3);
    expect(testTimeLine.steps[0].startTime).toBe(10);
    expect(testTimeLine.steps[0].endTime).toBe(10);
    expect(testTimeLine.steps[1].startTime).toBe(10);
    expect(testTimeLine.steps[1].endTime).toBe(130);
    expect(testTimeLine.steps[2].startTime).toBe(140);
    expect(testTimeLine.steps[2].endTime).toBe(260);
  });
});
//# sourceMappingURL=timeline.spec.js.map