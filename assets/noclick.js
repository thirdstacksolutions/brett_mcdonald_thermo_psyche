document.addEventListener('contextmenu', function (e) {
  const tag = e.target.tagName;
  const isMedia = tag === 'IMG' || tag === 'VIDEO';
  const isBgButton =
    tag === 'BUTTON' && getComputedStyle(e.target).backgroundImage !== 'none';

  if (isMedia || isBgButton) {
    e.preventDefault();
  }
});
