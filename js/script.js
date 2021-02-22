'use strict';

window.addEventListener('DOMContentLoaded', () => {

//* ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ

	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против...",
			"Абливион"
		]
	};

	const promo = document.querySelectorAll('.promo__adv img'),
		promoBG = document.querySelector('.promo__bg'),
		promoGenre = promoBG.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		form = document.querySelector('form.add'),
		inputMovie = form.querySelector('.adding__input'),
		checkLike = form.querySelector('input[type="checkbox"]');


//* ВЫЗОВ ФУНКЦИЙ

	update(movieDB.movies, movieList);
	makeChanges();
	deletePromo(promo);

//* ОБРАБОТЧИКИ СОБЫТИЙ

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		let newFilm = inputMovie.value;

		createLikeFilms();
		addFilm(newFilm);
		e.target.reset();
	});

//* ФУНКЦИИ

	function addFilm(film) {

		if (film.trim()) {

			if(film.length > 21) {
				film = `${film.substring(0, 22)}...`;
			}

			if(checkLike.checked) {
				createLikeFilms();
			}

			movieDB.movies.push(film);
			update(movieDB.movies, movieList);
		}
	}

	function update(films, parent) {
		parent.innerHTML = '';

		sortArr(films);

		films.forEach((film, i) => {
			parent.innerHTML += `
	  			<li class="promo__interactive-item">${i + 1}. ${film}
		  			<div class="delete"></div>
	  			</li>
	 		 `;
		});

		document.querySelectorAll('.delete').forEach((del, i) => {
			del.addEventListener('click', () => {

				del.parentElement.remove();
				movieDB.movies.splice(i, 1);

				update(films, parent);
			});
		});
	}

	function createLikeFilms() {

			console.log('Добавляем любимый фильм');
	}

	function deletePromo(arr) {
		arr.forEach(item => item.remove());
	}

	function makeChanges() {
		promoGenre.textContent = 'драма';
		promoBG.style.background = 'url("img/bg.jpg")';
	}

	function sortArr(arr) {
		arr.sort();
	}

});