// const button = document.querySelector('.button');
// const closen = document.querySelector('.popup-close');
// const popupWrapper = document.querySelector('.wrapper');
// const backGradient = document.querySelector('.backgradient');
// const boxBody = document.querySelector('.boxBody');


// button.addEventListener('click', () => {
//     popupWrapper.classList.toggle('hidden')
//     boxBody.classList.add('blur')
//     map.classList.add('hidden')


// });

// closen.addEventListener('click', () => {
//     popupWrapper.classList.toggle('hidden')
// })


const map = document.getElementById('map')

const modal = document.querySelector('.modal')
const showModal = document.querySelector('.show-modal')

const closePop = document.querySelector('.popup-close')
const box  = document.querySelector('.box')

const boxSubmit = document.querySelector('.box-submit')
const payOut = document.querySelector('pay-out')



showModal.addEventListener('click', function(){
    modal.classList.remove('hidden')
    map.classList.add('hidden')
});

closePop.addEventListener('click', function(){
    modal.classList.add('hidden')
})



function X() {
    const firstDate = document.getElementById('firstdate').value;
    const seconDate = document.getElementById('secondate').value;

    const startTimeStamp = new Date(firstDate).getTime();
    const endTimeStamp = new Date(seconDate).getTime();

    const difference = endTimeStamp - startTimeStamp;
    const rounDifference = Math.round(difference / 86400000);
    const payPerDay = Math.round(rounDifference * (120000));

    const dayCountElement = document.getElementById('dayCount');
    dayCountElement.innerHTML = `<p class='text-blue-600'>#${payPerDay} <p class='text-black'>per</p> <p class='text-blue-600'>${rounDifference}</p> <span>nights</span> </p> `;

    box.classList.add('hidden')
    boxSubmit.classList.remove('hidden')

    payOut.innerHTML = `<span>${payPerDay}</span>`;
};
