(function (window, document) {
  // DATE
  var now = new Date();
  var nowMonth = now.getMonth() + 1; 
  var nowDate = now.getDate();      
  var week = new Array('일', '월', '화', '수', '목', '금', '토')
  var nowDay = week[now.getDay()];

  document.getElementById("nowMonth").innerHTML = nowMonth;
  document.getElementById("nowDate").innerHTML = nowDate;
  document.getElementById("nowDay").innerHTML = nowDay;


  //ALBUM
  $("#albumMenu-art").click(function() {
    $("#albumMenu-art").css({
      "color" : "black",
      "font-weight": "bold",
      "border-bottom":"3px solid rgb(67, 222, 228)"
    });
    $("#albumMenu-album").css({
      "color" : "#7d8285",
      "font-weight": "normal",
      "border-bottom":"none"
    });
  });
  $("#albumMenu-album").click(function() {
    $("#albumMenu-album").css({
      "color" : "black",
      "font-weight": "bold",
      "border-bottom":"3px solid rgb(67, 222, 228)"
    });
    $("#albumMenu-art").css({
      "color" : "#7d8285",
      "font-weight": "normal",
      "border-bottom":"none"
    });
  });

  // ALBUM DETAIL POPUP TOGGLE
  $(".album__art").click(function() {
    $(".album__detail").css({
      "top": (($(window).height()-$(".album__detail").outerHeight())/2+$(window).scrollTop())+"px",
      "left": (($(window).width()-$(".album__detail").outerWidth())/2+$(window).scrollLeft())+"px"
    });
    $(".album__detail-background").css("display","block");
    $(".album__detail").css("display","block");
    
    $("body").css("overflow","hidden");

    //DETAIL NAME 추출
    var name = $('p.album__name').text();
    $('.album__detail__name span').text(name);
  });

  $("#album__detail__closeBtn").click(function(){
    $(".album__detail-background").css("display","none");
    $(".album__detail").css("display","none"); 
    $("body").css("overflow","auto");
  });


  // POPUP TOGGLE
  $("#popup__btn-close").click(function() {
      $('#popup').fadeOut( 1000 );
      $('#popup__btn-open').fadeIn(1500);
    });
    $("#popup__btn-open").click(function() {
      $('#popup__btn-open').fadeOut( 1000 );
      $('#popup').fadeIn(1000);
    });
})(window, document);   