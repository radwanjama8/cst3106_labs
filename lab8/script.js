

$(document).ready(function () {

  // When the Roll button is clicked
  $('#rollBtn').on('click', function () {
    rollDice();
  });

  function rollDice() {
  const $die = $('.die');
  const value = Math.floor(Math.random() * 6) + 1;

  // Add the shake animation class
  $die.addClass('shake');

  // Remove it after animation ends so it can replay next time
  setTimeout(() => {
    $die.removeClass('shake');
    $die.empty();            // clear old dots
    drawDots($die, value);   // show new random number
  }, 500); // match CSS duration (0.5s)
}


  // Function: draw dots on dice based on number rolled
  function drawDots($die, num) {
    const positions = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [25, 75], [75, 25], [75, 75]],
      5: [[25, 25], [25, 75], [75, 25], [75, 75], [50, 50]],
      6: [[25, 25], [25, 75], [75, 25], [75, 75], [25, 50], [75, 50]]
    };

    // Loop through each pip position and add white dots
    positions[num].forEach(([top, left]) => {
      const $dot = $('<div class="dot"></div>');
      $dot.css({
        top: `${top}%`,
        left: `${left}%`,
        transform: 'translate(-50%, -50%)'
      });
      $die.append($dot);
    });
  }

  // Start with dice showing 6
  drawDots($('.die'), 6);
});
