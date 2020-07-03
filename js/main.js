$(function() {
  // ハンバーガー部分を隠す
  $('.hbg > dd').hide();
  $('.hbg2 > dd').hide();
  
  // クリック時に動作
  // hbg1
  $('.hbg > dt').click(function() {
    // 状態を確認し表示・非表示処理
    $('+dd', this).slideToggle(500);
    $(this).toggleClass("rotate");
  });

  // hbg2
  $('.hbg2 > dt').click(function() {
    // 状態を確認し表示・非表示処理
    $('.hbg2-arr').removeClass("rotate");
    if ($('+dd', this).css('display') == 'block') {
      $('.hbg2 > dd').slideUp(500);
      $(this).removeClass("rotate");
    } else {
      $('.hbg2 > dd').slideUp(500);
      $('+dd', this).slideDown(500);
      $(this).addClass("rotate");
    }
  });
})

// ---ページトップ移動処理-start---
// id="body"要素の一番上の位置を取得
const bodyTop = $('.contents2').offset().top;

// スクロールをトリガーに処理を開始
$(window).scroll(function () {
  // トップからのスクロール量を取得
  let scroll = $(this).scrollTop();

  if (scroll >= bodyTop) {
    $('#pagetop').attr({
      style: 'visibility: visible; opacity: 1;'
    });
  } else {
    $('#pagetop').attr({
      style: 'visibility: hidden; opacity: 0;'
    });
  }
});

// ページのトップに移動
$("#pagetop").click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
});
// ---ページトップ移動処理-end---

// #で始まるアンカーをクリックした場合に処理(ページ内リンク)
$('a[href^="#"]').click(function () {
  // スクロールの速度
  var speed = 400; // ミリ秒
  // アンカーの値取得
  var href = $(this).attr("href");
  // 移動先を取得
  var target = $(href == "#" || href == "" ? 'html' : href);
  // 移動先を数値で取得
  var position = target.offset().top - 75;
  // スムーススクロール
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return false;
});