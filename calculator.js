let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

//고차 함수를 쓰는 이유 : 대부분 다 비슷한데 특정 부분만 다른 함수가 실무에서는 더 많이 나오기 때문

const onClickNumber = (number) => (event) => {
    if(operator) {
        numTwo += event.target.textContent; // 버튼을 클릭할 때 버튼 내부의 문자를 가져옴
    } else {
        numOne += event.target.textContent;
    }
    $result.value += event.target.textContent;
}

document.querySelector('#num-0').addEventListener('click',onClickNumber);
document.querySelector('#num-1').addEventListener('click',onClickNumber);
document.querySelector('#num-2').addEventListener('click',onClickNumber);
document.querySelector('#num-3').addEventListener('click',onClickNumber);
document.querySelector('#num-4').addEventListener('click',onClickNumber);
document.querySelector('#num-5').addEventListener('click',onClickNumber);
document.querySelector('#num-6').addEventListener('click',onClickNumber);
document.querySelector('#num-7').addEventListener('click',onClickNumber);
document.querySelector('#num-8').addEventListener('click',onClickNumber);
document.querySelector('#num-9').addEventListener('click',onClickNumber);

const onClickOperator = (op) => () => {
    if(numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
}

document.querySelector('#plus').addEventListener('click',onClickOperator('+'));
document.querySelector('#minus').addEventListener('click',onClickOperator('-'));
document.querySelector('#divide').addEventListener('click',onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click',onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {});
document.querySelector('#clear').addEventListener('click', () => {});
