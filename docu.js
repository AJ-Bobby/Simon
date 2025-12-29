document.addEventListener('keydown', function (event) {
  // event.key returns the value of the pressed key (e.g., 'Enter', 'a', 'ArrowUp')
  if (event.key === 'Enter') {
    console.log('The Enter key was pressed!');
    // You can perform any action here when Enter is pressed
  } else if (event.key === 'Escape') {
    console.log('The Escape key was pressed!');
  } else if (event.key === 'a' || event.key === 'A') { // Case-insensitive check for 'a'
    console.log('The "a" key was pressed!');
  }
});