const mountHighlight = (element) => {
  const highlightDiv = document.createElement('div');
  highlightDiv.classList.add('card-highlight');
  highlightDiv.style.backgroundColor = element.dataset.color;
  element.append(highlightDiv);

  const overlayDiv = document.createElement('div');
  overlayDiv.classList.add('card-overlay');
  element.append(overlayDiv);

  overlayDiv.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;

    const highlightWidth = highlightDiv.offsetWidth;
    const highlightHeight = highlightDiv.offsetHeight;

    highlightDiv.style.left = `${offsetX - highlightWidth / 2}px`;
    highlightDiv.style.top = `${offsetY - highlightHeight / 2}px`;
  });
};

window.addEventListener('load', () => {
  for (const card of document.getElementsByClassName('card')) {
    mountHighlight(card);
  }
});
