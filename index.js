// Navbar scroll and fixed to top of page

function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#content-anchor').offset().top;
  if (window_top > div_top) {
      $('#nav_bar').addClass('stick');
      $('#sticky-phantom').show();
  } else {
      $('#nav_bar').removeClass('stick');
      $('#sticky-phantom').hide();
  }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});