$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
function scrollTo(element){
	window.scroll(
		{
			left: 0,
			top: element.offsetTop,
			behavior: 'smooth'
		})
}

var button = document.querySelector('#button2');
// var footer = document.querySelector('#footer');

button.addEventListener('click,', () =>{
	console.log('123')
})

