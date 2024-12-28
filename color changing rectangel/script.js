const rectangle = document.querySelector('.rectangle');

rectangle.addEventListener('mousemove', (event) => {
  const rect = rectangle.getBoundingClientRect();
  const mouseX = event.clientX - rect.left; // Mouse X relative to the rectangle
  const rectWidth = rect.width;

  // Calculate color intensity based on mouse X position
  const redIntensity = Math.round((1 - mouseX / rectWidth) * 255);
  const blueIntensity = Math.round((mouseX / rectWidth) * 255);

  rectangle.style.backgroundColor = `rgb(${redIntensity}, 0, ${blueIntensity})`;
});
