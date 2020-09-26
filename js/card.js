// ***HOME PAGE*** - Banner
let contactBtn = document.querySelector('.card-btn');
let contactBtnText = document.querySelector('.card-btn-contact');
let contactIcon = document.querySelector('.fa-angle-up');
let social = document.querySelector('.card-social');

contactBtn.addEventListener('click', () => {
    contactBtn.classList.toggle('change');
    contactBtnText.classList.toggle('change');
    contactIcon.classList.toggle('change');
    social.classList.toggle('change');
});