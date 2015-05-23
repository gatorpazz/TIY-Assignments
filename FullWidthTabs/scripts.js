(function(window){
  var BASE_URL = 'http:lorempixel.com/400/200/cats?';

  function rando(limit){
    return Math.floor(Math.random() * limit);
  }

  function randoImage(){
    return BASE_URL + '?' + rando(1000);
  }

  $('img').attr('src', randoImage);

  var tabList = document.querySelector('nav');
  var tabs = tabList.querySelectorAll('a');

  $('a.tab1').click(function(){
    $('section').removeClass('content-current');
    $('#section-1').addClass('content-current');
    $('a').removeClass('tab-current');
    $('a.tab1').addClass('tab-current');
  });

  $('a.tab2').click(function(){
    $('section').removeClass('content-current');
    $('#section-2').addClass('content-current');
    $('a').removeClass('tab-current');
    $('a.tab2').addClass('tab-current');
  });

  $('a.tab3').click(function(){
    $('section').removeClass('content-current')
    $('#section-3').addClass('content-current')
    $('a').removeClass('tab-current');
    $('a.tab3').addClass('tab-current');
  });

  $('a.tab4').click(function(){
    $('section').removeClass('content-current')
    $('#section-4').addClass('content-current')
    $('a').removeClass('tab-current');
    $('a.tab4').addClass('tab-current');
  });

  $('a.tab5').click(function(){
    $('section').removeClass('content-current')
    $('#section-5').addClass('content-current')
    $('a').removeClass('tab-current');
    $('a.tab5').addClass('tab-current');
  });

})(window);
