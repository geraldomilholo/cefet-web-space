// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

var slider = function (indexImg) {

	let $slide = document.querySelectorAll('#slide');
	let srcImage = servidorDasImagens + todasAsImagens[indexImg];
	$slide[0].src = srcImage;

	//console.log("Image src = "  + srcImage);
};

(function next(){

	let index = 0;
	slider(index);

	let $next = document.querySelectorAll('#proximo');
	$next[0].addEventListener('click', function(event) {

		let nextIndex = index + 1;
		if (nextIndex > 4) {
			nextIndex = 0;
		} 

		index = nextIndex;
		slider(index);
	});

	let $before = document.querySelectorAll('#anterior');
	$before[0].addEventListener('click', function(event) {

		let beforeIndex = index - 1;
		if (beforeIndex < 0) {
			beforeIndex = 4;
		} 

		index = beforeIndex;
		slider(index);
	});

}());