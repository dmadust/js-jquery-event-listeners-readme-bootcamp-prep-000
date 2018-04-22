//define functions here
function getIt() {
  $('p').on('click', function () {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').load()
}

$(document).ready(function(){

// call functions here
  getIt();

});
