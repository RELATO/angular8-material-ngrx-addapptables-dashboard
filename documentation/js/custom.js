$(function () {

  // Variables

  var Nav_Li = $(".sidebar .nav li a"),
    Htm_Bod = $("html, body");

  // Smooth Scroll

  Nav_Li.on("click", function (e) {

    Htm_Bod.animate({

      scrollTop: $($(this).attr("href")).offset().top

    }, 500);

    e.preventDefault();

  });

  // Remove 000webhost brand

  $('body').find('img[src$="https://cdn.rawgit.com/000webhost/logo/e9bd13f7/footer-powered-by-000webhost-white2.png"]').parent().closest('a').closest('div').remove();

});
