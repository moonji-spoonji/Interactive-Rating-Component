
const ratingCard = document.getElementById('rating-card')
const submit = document.getElementById('submit');
const thanks = document.getElementById('thanks');
const userRating = document.getElementById('user-rating')

const rateButtons = document.querySelectorAll('.selected');

rateButtons.forEach((rating) => {
    rating.addEventListener('click', function() {
        userRating.innerText = rating.innerText;
    });
});

submit.addEventListener('click', function() {
    ratingCard.classList.toggle('hidden')
    thanks.classList.toggle("hidden");
});
