const startScreen = document.querySelector('.startScreen');
const gameAreaLeft = document.querySelector('.gameAreaLeft');
const gameAreaRight = document.querySelector('.gameAreaRight');

startScreen.addEventListener('click', start);


function start()
{
	startScreen.classList.add('hide');
	gameAreaRight.classList.remove('hide');
	gameAreaLeft.classList.remove('hide');
	
	for(x = 0; x < 5; x++)
	{
		let roadLineLeft1 = document.createElement('div');
		roadLineLeft1.setAttribute('class', 'roadLineLeft1');
		roadLineLeft1.y = x*150;
		roadLineLeft1.style.top = roadLineLeft1.y + 'px';
		gameAreaLeft.appendChild(roadLineLeft1);

		let roadLineLeft2 = document.createElement('div');
		roadLineLeft2.setAttribute('class', 'roadLineLeft2');
		roadLineLeft2.y = x*150;
		roadLineLeft2.style.top = roadLineLeft2.y + 'px';
		gameAreaLeft.appendChild(roadLineLeft2);

		let roadLineRight1 = document.createElement('div');
		roadLineRight1.setAttribute('class', 'roadLineRight1');
		roadLineRight1.y = x*150;
		roadLineRight1.style.top = roadLineRight1.y + 'px';
		gameAreaRight.appendChild(roadLineRight1);

		let roadLineRight2 = document.createElement('div');
		roadLineRight2.setAttribute('class', 'roadLineRight2');
		roadLineRight2.y = x*150;
		roadLineRight2.style.top = roadLineRight2.y + 'px';
		gameAreaRight.appendChild(roadLineRight2);
	}
}
