//using selectors inside the element
// const questions = document.querySelectorAll('.question');

// questions.forEach((question) => {
//     const btn = question.querySelector('.question-btn');
//     btn.addEventListener('click', function () {
//         questions.forEach((item) => {
//             if (item != question) {
//                 item.classList.remove('show-text');
//             }
//         });
//         question.classList.toggle('show-text');
//     });
// });

// traversing the dom
const questionButtons = document.querySelectorAll('.question-btn');
questionButtons.forEach((questionButton) => {
    questionButton.addEventListener('click', function () {
        const parentEle = questionButton.parentElement.parentElement;

        questionButtons.forEach((item) => {
            const parentEleItem = item.parentElement.parentElement;
            if (parentEleItem != parentEle) {
                parentEleItem.classList.remove('show-text');
            }
        });
        parentEle.classList.toggle('show-text');
    });
});
