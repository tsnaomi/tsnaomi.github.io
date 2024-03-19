(function() {
  function decode() {
    // unmask
    var xyz = ['n', 'l', 'a', 'i', 'p', 'u', '.', '@', 'm', 'o', 'sh', 'r'];
    var abc = xyz[0] + xyz[2] + xyz[9] + xyz[8] + xyz[3] + xyz[6] + xyz[10] + xyz[2] + xyz[4] + xyz[3] +
              xyz[11] + xyz[9] + xyz[7] + xyz[11] + xyz[5] + xyz[6] + xyz[0] + xyz[1];

    // scramble and unscramble!
    $('.something').shuffleLetters( {text: abc, fps: 30} );
  }

  // render contact info
  decode();
})();
