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
  var tabs = tabList.querySelectorAll('a')
  _.for

  $('a').click(function(){
    $('section').removeClass('content-current')
  });

})(window);
