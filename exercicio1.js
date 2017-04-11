// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
(function expandCollapse() {
	
	let $expandButtons = document.querySelectorAll('button.botao-expandir-retrair');
	for (var i = 0; i < $expandButtons.length; i++) {

		$expandButtons[i].addEventListener('click', function(event) {
			
			let $parentElement = this.parentElement;
			if ($parentElement.classList.contains('expandido')) {
				$parentElement.classList.remove('expandido');
			} else {
				$parentElement.classList.add('expandido'); 
			}

		});
	}
	
}());