$(document).ready(function() {
  $('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    $('.navigation-wrapper').removeClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon')
      .removeClass()
      .addClass('fa fa-list btn-mobile-menu__icon');
    if (location.hash && location.hash == '#blog') return;
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover')
        .css('max-width', currentWidth)
        .animate(
          { width: '30%', 'max-width': '700px' },
          400,
          (swing = 'swing'),
          function() {
            $('.panel-cover')
              .css('width', '')
              .css('max-width', '');
          }
        );
      $('.panel-cover').addClass('panel-cover--collapsed');
      //$('.panel-cover').css('max-width', currentWidth);
    }
  });

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }

  if (window.location.pathname.substring(0, 5) == '/tag/') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    if ($('.navigation-wrapper').css('display') == 'block') {
      $('.navigation-wrapper').on(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function() {
          $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
          $('.navigation-wrapper').off(
            'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
          );
        }
      );
      $('.navigation-wrapper').toggleClass(
        'animated bounceInDown animated bounceOutUp'
      );
    } else {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    }
    $('.btn-mobile-menu__icon').toggleClass(
      'fa fa-list fa fa-angle-up animated fadeIn'
    );
  });

  // $('.navigation-wrapper .blog-button').click(function() {
  //   if ($('.navigation-wrapper').css('display') == 'block') {
  //     // $('.navigation-wrapper').on(
  //     //   'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  //     //   function() {
  //     //     $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
  //     //     $('.navigation-wrapper').off(
  //     //       'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
  //     //     );
  //     //   }
  //     // );

  //     $('.navigation-wrapper').toggleClass(
  //       'animated bounceInDown animated bounceOutUp'
  //     );
  //   }

  //   $('.btn-mobile-menu__icon').toggleClass(
  //     'fa fa-list fa fa-angle-up animated fadeIn'
  //   );
  // });
});
