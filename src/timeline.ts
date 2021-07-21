interface TimeLineOptions {
  target: string,
};

interface TimeLineStepOptions {
  input: string,
  animated?: boolean,
  characterSpeed?: number,
  delay?: number,
};

interface TimeLineEvent {
  event: () => void
}

interface TimeLineStepEvent {
  event: (step: TimeLineStep) => void
}

class TimeLineStep {
  timeline: TimeLine;
  options: TimeLineStepOptions;
  startTime: number;
  endTime: number;

  constructor(timeline: TimeLine, options: TimeLineStepOptions, startTime: number, endTime: number) {
    this.timeline = timeline;
    this.options = options;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

class TimeLine {
  options: TimeLineOptions;
  steps: Array<TimeLineStep>;
  onComplete: Array<TimeLineEvent>;
  onStepComplete: Array<TimeLineStepEvent>;

  constructor(options: TimeLineOptions) {
    this.options = options;
    this.steps = [];
    this.onComplete = [];
    this.onStepComplete = [];
  }

  private fireOnCompleteEvent() {
    this.onComplete.map((event) => {
      event.event();
    });
  }

  private fireOnStepCompleteEvent(step: TimeLineStep) {
    this.onStepComplete.map((event) => {
      event.event(step);
    });
  }

  addOnComplete(event: TimeLineEvent) {
    this.onComplete.push(event);
  }

  addOnStepComplete(event: TimeLineStepEvent) {
    this.onStepComplete.push(event);
  }

  add(options: TimeLineStepOptions) {
    let startTime = options.delay || 0;
    if (this.steps.length > 0) {
      startTime = this.steps[this.steps.length - 1].endTime + (options.delay || 0);
    }
    let endTime = startTime;

    if (options.animated) {
      const characterSpeed = options.characterSpeed || 1;
      const length = options.input.length * characterSpeed;
      endTime = endTime + length;
    }

    this.steps.push(new TimeLineStep(this, options, startTime, endTime));
  }

  play() {
    const target = document.getElementById(this.options.target);
    this.steps.map((step) => {
      if (step.options.animated) {
        const chArray = step.options.input.split('');
        
        chArray.map((ch, index) => {
          setTimeout(() => {
            target.innerHTML += ch;

            if (index === chArray.length - 1) {
              this.fireOnStepCompleteEvent(step);
            }
          }, step.startTime + (index * step.options.characterSpeed));
        });

      } else {
        setTimeout(() => {
          target.innerHTML += step.options.input;
          this.fireOnStepCompleteEvent(step);
        }, step.startTime);
      }
    });

    setTimeout(() => {
      this.fireOnCompleteEvent();
    }, this.steps[this.steps.length - 1].endTime);
  }
}

function timeline(options: TimeLineOptions): TimeLine {
  return new TimeLine(options);
}

export default timeline;
