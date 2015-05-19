//alert("I work in the html");
var tabElements = document.querySelectorAll('a');
var panelElements = document.querySelectorAll('section');

_.forEach(tabElements, function(element, index, tabElements){
    element.addEventListener('click', function(){
      element.parentElement.classList.toggle('tab-current');
    });
});

//_.forEach(tabElements, function(element, index, panelElements){
//    element.addEventListener('click', function(){
//      element.classList.toggle('content-current');
//    });
//});
