// TO OPEN THE ACCORDION:
// WHAT EVENT SHOULD I LISTEN FOR? 'CLICK'
// WHAT ELEMENT SHOULD LISTEN FOR THAT CLICK? '.CBP-NTTRIGGER'
//_.forEach(document.querySelectorAll('.cbp-nttrigger'), function(element){
//  element.addEventListener('click', function(){
//    element.parentElement.classList.toggle('cbp-ntopen');
//  })
//})
// WHAT SHOULD I DO WHEN THAT EVENT FIRES?
// 1. Toggle '.cbp-ntopen'from parent '<li>' element
$('.cbp-nttrigger').on('click', function(event){
  $(event.target).parent().toggleClass('cbp-ntopen')
});
