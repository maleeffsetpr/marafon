let likeButton = document.querySelector('.likebtn');
let likesNumber = document.querySelector('.like-number');

likeButton.onclick = function () {
		if (likeButton.classList.contains('added')) {
    	likesNumber.textContent--}
    	else {
	   likesNumber.textContent++}

	likeButton.classList.toggle('added')
};