const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  })
}

container.addEventListener('click', (e) => {
  if(e.target.classList.contains('panel')) {
    const panel = e.target;
    removeActiveClass();
    panel.classList.add('active');
  }
});