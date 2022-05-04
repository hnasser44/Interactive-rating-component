const points = document.querySelectorAll('.num')
const selection = document.getElementById('selection')
selection.innerHTML = "okay"
let score = 0 


points.forEach( point => {
    point.addEventListener('click', () => {
        score = point.getAttribute('data-point')
        selection.innerHTML = score
    })
});

function SubmitRating() {
    const rating = document.querySelector('.hide');
    const message = document.querySelector('.thank-you')
    rating.classList.add('hide-main')
    message.classList.remove('thank-you-hide')

}