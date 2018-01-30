// scroll back to top
const scrollToTop = () => {
  let $topOfPage = $('.top-of-page');
  let $backToTop = $('.backToTop');

  $backToTop.on( "click", () => {
     $('html, body').animate({
        scrollTop: $topOfPage.offset().top
    }, 500);
  });
}

export default scrollToTop;
