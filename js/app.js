$(document).ready(function() {
  for (var i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
      x = 'Fizz Buzz';
      $('ul').prepend('<li>' + x + '</li>');
    }
    else if (i % 3 == 0) {
      x = 'Fizz';
      $('ul').prepend('<li>' + x + '</li>');
    }
    else if (i % 5 == 0) {
      x = 'Buzz';
      $('ul').prepend('<li>' + x + '</li>');
    }
    else {
      $('ul').prepend('<li>' + i + '</li>');
    }
  }
});