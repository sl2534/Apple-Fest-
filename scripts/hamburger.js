$("#hamburger").click(function() {
  if ($("#nav").hasClass("hidden")) {
    $("#nav").removeClass("hidden");
  } else {
  $("#nav").addClass("hidden");
  }
});


$(document).ready(function() {
  if ($(document).width() < 900) {
    $("#hamburger").removeClass("hidden");
  } else {
    $("#hamburger").addClass("hidden");
  }
});

$(document).ready(function() {
  if ($(document).width() >= 900) {
    $("#nav").removeClass("hidden");
  } else {
    $("#nav").addClass("hidden");
  }
});

$(window).resize(function() {
  if ($(document).width() < 900) {
    $("#hamburger").removeClass("hidden");
    $("#nav").addClass("hidden");

  } else {
    $("#hamburger").addClass("hidden");
    $("#nav").removeClass("hidden");
  }
});



// $(window).resize(function() {
//   if ($(document).width() < 900) {
//     $("#hamburger").removeClass("hidden");
//     $("#home").addClass("hidden");
//     $("#vendors").addClass("hidden");
//     $("#transportation").addClass("hidden");
//   } else {
//     $("#hamburger").addClass("hidden");
//     $("#home").removeClass("hidden");
//     $("#vendors").removeClass("hidden");
//     $("#transportation").removeClass("hidden");
//   }
// });
