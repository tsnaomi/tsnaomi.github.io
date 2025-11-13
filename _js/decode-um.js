(function() {
  function decode() {
    // unmask
    var xyz = ['t', 'mich', 'a', 'ed', '.', '@', 'omi', 'u', 'sn'];
    var abc = xyz[0] + xyz[8] + xyz[2] + xyz[6] + xyz[5] + xyz[7] + xyz[1] + xyz[4] + xyz[3] + xyz[7];

    // scramble and unscramble!
    $('.something').shuffleLetters( {text: abc, fps: 30} );
  }

  // render contact info
  decode();
})();
