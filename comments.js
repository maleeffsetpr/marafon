let commentForm = document.querySelector('.comm-form');
let commentList = document.querySelector('.comm-list');
let commentField = document.querySelector('.comment-area');
let submitButton = document.querySelector('.btn-form');


commentForm.onsubmit = function (evt) {
  evt.preventDefault();
  		
    let newComment = document.createElement('li');
    newComment.classList.add('user-comment');


    newComment.textContent = commentField.value;
    commentField.value = '';
	 
	 commentList.append(newComment);
};


commentField.oninput = function () {
    if (commentField.value.length < 10) {
    commentField.classList.add('warning')
    submitButton.disabled = true;}
    else if (commentField.value.length > 200) {
    commentField.classList.add('warning')
    submitButton.disabled = true;}
    else {
    commentField.classList.remove('warning')
    submitButton.disabled = false}
 };