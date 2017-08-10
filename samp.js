var prison = (function() {
  var prisoner = 'Josh Powel';

  return {
    prisoner: function() {
      return prisoner;
    }
  }
})();

console.log( prison.prisoner());
console.log( prison.prisoner());
console.log( prison.prisoner());