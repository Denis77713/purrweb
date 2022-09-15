$('.slick-example').slick({
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
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
