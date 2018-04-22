//define functions here
function getIt() {
  $('p').on('click', function () {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 81) {
      alert('You typed the G key!');
    }
  });
}

function pressIt()

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
});
