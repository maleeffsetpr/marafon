let commentForm = document.querySelector('.feed-form');
let commentField = document.querySelector('.massage');
let submitButton = document.querySelector('.btn-feed');

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