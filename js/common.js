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
})

/* 메인 슬라이더 */
let num2 = 0;
let on1, on2;
let mainSlider = function(on1) {
  if ( num2 == 1) num2 = -1;
  num2++;
  on1 = num2;
  on2 = num2+1;
  if ( on1 == 0 ) on1 = 2;
  console.log(on1, on2)

  $("#mainbtn a.num").removeClass('type');
  $("#mainbtn a.num:eq("+ num2 +")").addClass('type');
  $(".slider"+on2).addClass('active').animate({ opacity: 1 }, 1000)
  $(".slider"+on1).animate({ opacity: 0 }, 1000, function() {
    $(this).removeClass('active');
    $(("#mainsliderList")).append($(this))
  })
}
let index1, index2;
$("#mainbtn a.num").on('click', function(e){
  index1 = $(this).index()+1;
  index2 = $(this).index()+2;
  if ( index2 == 3) index2 = 1;
  console.log(index1, index2)
  e.preventDefault();
  $("#mainbtn a.num").removeClass('type');
  $(this).addClass('type');

  $(".slider"+index1).addClass('active').animate({ opacity: 1 }, 1000)
  $(".slider"+index2).animate({ opacity: 0 }, 1000, function() {
    $(this).removeClass('active');
    $(("#mainsliderList")).append($(this))
  })
  clearInterval(timer)
  timer = setInterval(mainSlider, 3000)
})
let timer = setInterval(mainSlider, 4000)
$("#mainbtn a:nth-child(3)").on('click', function(e) {
  e.preventDefault();
  clearInterval(timer)
  timer = setInterval(mainSlider, 4000)
  });
  $("#mainbtn a:nth-child(4)").on('click', function(e) {
    e.preventDefault();
    clearInterval(timer)
  })


/* 시그니처 스테이크 & 립세트 */
$("#steaksetList").prepend($("#steaksetList li:last"))
$("#steaksetList li:eq(0)").clone().appendTo($("#steaksetList"))
$("#steaksetList li:eq(1)").clone().appendTo($("#steaksetList"))
$("#steaksetList li:eq(2)").clone().appendTo($("#steaksetList"))
$("#steaksetList li:eq(3)").clone().appendTo($("#steaksetList"))
$('#nextbtn').on('click', function(e) {
  e.preventDefault();
  $("#steaksetList").animate({ marginLeft: `-=600` }, function() {
    $(this).append($(">li:first", this)).css({ marginLeft: -600 })
  })
})
$("#prevbtn").on('click', function(e) {
  e.preventDefault();
  $("#steaksetList").prepend($("#steaksetList li:last")).css({ marginLeft: -1200 })
  $("#steaksetList").animate({ marginLeft: `+=600`},)
})


/* 이벤트 슬라이더 */
num = 1;
$("#eventbtn a").on('click', function(e) {
  e.preventDefault();
  numIndex = $(this).index()
  let slideMove = $(this).index() * (-$(window).innerWidth());
  console.log(slideMove)
  $("#eventList").animate({ left: slideMove })

 /* 이벤트 슬라이더 버튼 */ 
  $("#eventbtn a").removeClass('on');
  $(this).addClass('on')
});
