/* 메뉴 */
$(".snb").hide();
$("#gnbList > li").hover(function() {
  $(this).children('.snb')
          .stop()
          .css({ display: 'block', opacity: 0, top: 30 })
          .animate({ opacity: 1, top: 45 }, 200)
}, function() {
  $(this).children('.snb').stop().fadeOut(100)
})

/* 메뉴 휠 이벤트 */
$(window).scroll(function(e) {
  e.preventDefault();
  let scTop = $(this).scrollTop();
  if(scTop > 0) {
    $("#headerWrap").css( 'background-color', 'white')
  } else{
    $("#headerWrap").css( 'background-color', 'rgba(0, 0, 0, 0)')
  }
});