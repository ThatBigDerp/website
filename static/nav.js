$(document).ready(function () {
    $(".navlink").click(function() {
      $(".active").removeClass('active');
      $(this).addClass('active');
    });
  });