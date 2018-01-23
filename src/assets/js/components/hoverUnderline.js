const hoverUnderline = () => {
  let $menuLink = $('.menu-link');

  $menuLink.mouseover(function(){
    let $hoverUnderlineItem = $( this ).next( '.hover-underline-item' );

    TweenMax.to($hoverUnderlineItem, 0.5, {
      scaleX:1,
      ease: Power4.easeInOut,
    })
  });

  $menuLink.mouseleave(function(){
    let $hoverUnderlineItem = $( this ).next( '.hover-underline-item' );

    TweenMax.to($hoverUnderlineItem, 0.5, {
      scaleX:0,
      ease: Power4.easeInOut,
    })
  });

}

export default hoverUnderline;
