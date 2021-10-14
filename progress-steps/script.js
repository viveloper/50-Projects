class Circles {
  constructor() {
    this.el = document.querySelectorAll('.circle');
    this.state = {
      step: 0,
    };
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    this.el.forEach((circle, step) => {
      if (step <= this.state.step) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }
}

class Progress {
  constructor() {
    this.el = document.querySelector('.progress');
    this.state = {
      progress: 0,
    };
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    this.el.style.width = `${this.state.progress}%`;
  }
}

class ButtonNext {
  constructor({ onClick }) {
    this.el = document.querySelector('#next');
    this.el.addEventListener('click', this.handleClick.bind(this));
    this.state = {
      isDisabled: false,
    };
    this.onClick = onClick;
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  handleClick() {
    this.onClick();
  }

  render() {
    this.el.disabled = this.state.isDisabled;
  }
}

class ButtonPrev {
  constructor({ onClick }) {
    this.el = document.querySelector('#prev');
    this.el.addEventListener('click', this.handleClick.bind(this));
    this.state = {
      isDisabled: false,
    };
    this.onClick = onClick;
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  handleClick() {
    this.onClick();
  }

  render() {
    this.el.disabled = this.state.isDisabled;
  }
}

const MAX_STEP = 3;

class App {
  constructor() {
    this.circles = new Circles();
    this.progress = new Progress();
    this.buttonNext = new ButtonNext({ onClick: this.stepUp.bind(this) });
    this.buttonPrev = new ButtonPrev({ onClick: this.stepDown.bind(this) });

    this.state = {
      currentStep: 0,
    };
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  stepUp() {
    if (this.state.currentStep < MAX_STEP) {
      this.setState({ currentStep: this.state.currentStep + 1 });
    }
  }

  stepDown() {
    if (this.state.currentStep > 0) {
      this.setState({ currentStep: this.state.currentStep - 1 });
    }
  }

  render() {
    this.circles.setState({ step: this.state.currentStep });
    this.progress.setState({
      progress: (100 / MAX_STEP) * this.state.currentStep,
    });
    this.buttonNext.setState({
      isDisabled: this.state.currentStep === MAX_STEP,
    });
    this.buttonPrev.setState({ isDisabled: this.state.currentStep === 0 });
  }
}

const app = new App();
app.render();
