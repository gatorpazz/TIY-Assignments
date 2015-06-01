var container = document.getElementById('cbp-vm');
var gridSwitch = document.querySelector('a.cbp-vm-grid');
var listSwitch = document.querySelector('a.cbp-vm-list');

gridSwitch.addEventListener('click', function(){
	gridSwitch.classList.toggle('cbp-vm-selected', true);
	listSwitch.classList.toggle('cbp-vm-selected', false);
	event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-grid', true);
	event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-list', false);
})

listSwitch.addEventListener('click', function(){
	listSwitch.classList.toggle('cbp-vm-selected', true);
	gridSwitch.classList.toggle('cbp-vm-selected', false);
	event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-list', true);
	event.target.parentNode.parentNode.classList.toggle('cbp-vm-view-grid', false);
})

// $gridSwitch.click(function() {
// 	$(this).toggle('cbp-vm-selected', true);
// 	$listSwitch.toggle('cbp-vm-selected', false);
// 	$('cbp-vm').toggle('cbp-vm-view-grid', true);
// 	$('cbp-vm').toggle('cbp-vm-view-list', false);
// });
//
// $listSwitch.click(function() {
// 	$(this).toggle('cbp-vm-selected', true);
// 	$gridSwitch.toggle('cbp-vm-selected', false);
// 	$('cbp-vm').toggle('cbp-vm-view-list', true);
// 	$('cbp-vm').toggle('cbp-vm-view-grid', false);
// })
