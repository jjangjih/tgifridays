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

/* 메인 슬라이더 */
$(".slider2").hide();
  $("#mainbtn a:nth-child(2)").on('click', function(e){
    e.preventDefault();
  $(".slider1").fadeOut('slow'); $(".slider2").fadeIn();
  $("#mainbtn a:first").on('click', function(e){
    e.preventDefault();
    $(".slider").fadeOut('slow'); $(".slider1").fadeIn(); $(".slider2").hide();
  })
});

/* 메인 슬라이더 버튼 */
$("#mainbtn a:nth-child(2)").on('click', function(e) {
  e.preventDefault();
  $("#mainbtn a:nth-child(1)").addClass(`type2`)
  $(this).addClass(`type1`);
})
$("#mainbtn a:nth-child(1)").on('click', function(e) {
  e.preventDefault();
  $("#mainbtn a").removeClass();
})

// $("mainbtn a:nth-child(1)").removeClass();


/* 시그니처 스테이크 & 립세트 */
$("steaksetList").prepend($("#steaksetList li:last"))
$('#nextbtn').on('click', function() {
  $("#steaksetList").animate({ marginLeft: `-=600` }, function() {
    $(this).append($(">li:first", this)).css({ marginLeft: -600 })
  })
})
$("#prevbtn").on('click', function() {
  $("#steaksetList").prepend($("#steaksetList li:last")).css({ marginLeft: -1200 })
  $("#steaksetList").animate({ marginLeft: `+=600`},)
})

/* 이벤트 슬라이더 */


/* 이벤트 버튼 */
$("#eventbtn a:first").addClass(`on`)
$("#eventbtn a").on('click', function(e) {
  e.preventDefault();
  $("#eventbtn a").removeClass();
  $(this).addClass(`on`)
})
