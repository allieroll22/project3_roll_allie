// Wrap every letter in a span
$('.h1-animate  .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: 4})
  .add({
    targets: '.h1-animate .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: function(el, i) {
      return 45 * (i+1)
    }
  }).add({
    targets: '.h1-animate ',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  var _d = document,
      _p = _d.querySelector('.preloader');

  console.log(_p)

  setTimeout(function(){
    _p.classList.add('is-loaded')
  }, 2000)


  $("img", "#gif-rows").click(function() {
    $('.preset-file').toggle();
    $('.gif-file').toggle();
  });
