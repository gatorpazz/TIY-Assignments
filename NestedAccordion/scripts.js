// alert("It's alive!");
document.head.parentElement.className = "js";

var elements = document.querySelectorAll('h3');

_.forEach(elements, function(element, index, elements){
    element.addEventListener('click', function(){
      console.log(elements[index]);
      element.parentElement.classList.toggle('cbp-ntopen');
    });
});
