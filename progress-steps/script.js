const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

const MAX_STEP = 3;

let [currentStep, setCurrentStep] = [
  0,
  (value) => {
    currentStep = value;
    render();
  },
];

const render = () => {
  renderCircles();
  renderProgress();
  renderButton();
};

const renderCircles = () => {
  circles.forEach((circle, step) => {
    if (step <= currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
};

const renderProgress = () => {
  const progressPercentage = (100 / MAX_STEP) * currentStep;
  progress.style.width = `${progressPercentage}%`;
};

const renderButton = () => {
  if (currentStep === 0) {
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  } else if (currentStep === MAX_STEP) {
    prevBtn.disabled = false;
    nextBtn.disabled = true;
  }
};

const stepUp = () => {
  if (currentStep < MAX_STEP) {
    setCurrentStep(currentStep + 1);
  }
};

const stepDown = () => {
  if (currentStep > 0) {
    setCurrentStep(currentStep - 1);
  }
};

nextBtn.addEventListener('click', stepUp);
prevBtn.addEventListener('click', stepDown);
