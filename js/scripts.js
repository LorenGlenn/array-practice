var fav = [];

var rearrange = function() {
  var one = fav[0];
  var two = fav[1];
  var three = fav[2];

  fav[1] = one;
  fav[0] = two;
  fav[2] = three;

  return fav;
}

$(document).ready(function() {

  $('button#submit').click(function(event) {
    fav.push($('input#fav1').val());
    fav.push($('input#fav2').val());
    fav.push($('input#fav3').val());
    rearrange();
    alert(fav);
    event.preventDefault();
  });
});
