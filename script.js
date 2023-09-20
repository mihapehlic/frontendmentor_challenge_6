const mainContainer = document.querySelector('.card-rating');
const secondaryContainer = document.querySelector('.card-thanks');
const submitButton = document.querySelector('.btn-submit');
const rating = document.querySelector('#rating');
const ratings = document.querySelectorAll('.btn');

let selectedRating = false;
const ratingMessage = document.createElement('div');
ratingMessage.textContent = 'Please select your rating';
ratingMessage.style.color = 'hsl(25, 97%, 53%)';
ratingMessage.style.display = 'none';
ratingMessage.style.textAlign = 'center';

submitButton.addEventListener('click', () => {
  if (selectedRating === true) {
    secondaryContainer.classList.remove('hidden');
    mainContainer.style.display = 'none';
  } else {
    ratingMessage.style.display = 'block';
  }
});

ratings.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;
    selectedRating = true;
  });
});

submitButton.parentElement.appendChild(ratingMessage);
