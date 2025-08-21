const ratingContainer = document.querySelector('.rating-component');
const resultContainer = document.querySelector('.result-component')
const ratings = document.querySelectorAll('.rating');
const ratingResult = document.querySelector('.rating-result');
const submit = document.querySelector('button');

const clearSelected = () => {
    ratings.forEach((el) => {
        return el.classList.contains('selected') ? el.classList.remove('selected') : null;
    })
}

const showResult = () => {
    ratingContainer.style.display = 'none';
    resultContainer.style.display = 'flex';
}

ratings.forEach((rating, idx) => {
    rating.addEventListener('click', () => {
        submit.disabled = false;
        clearSelected();
        rating.classList.add('selected')
        ratingResult.textContent = `You selected ${idx + 1} out of 5`
    })
})

submit.addEventListener('click', showResult);