let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

//고차 함수를 쓰는 이유 : 대부분 다 비슷한데 특정 부분만 다른 함수가 실무에서는 더 많이 나오기 때문

const onClickNumber = (event) => {
    if(!operator) {
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }
    //이 아래로는 operator가 존재하는 경우에만 실행됨
    if(!numTwo) {
        $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
    // if(operator) {
    //     if(!numTwo) {// numTwo에 값이 없을 때 입력하는 상황이 되면 화면을 비우고 값을 입력함
    //         $result.value = '';
    //     }
    //     numTwo += event.target.textContent; // 버튼을 클릭할 때 버튼 내부의 문자를 가져옴
    //     $result.value += event.target.textContent;
    // } else {
    //     numOne += event.target.textContent;
    //     $result.value += event.target.textContent;
    // }
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
document.querySelector('#calculate').addEventListener('click', () => {
    if(numTwo) {
        // eval(numOne + operator + numTwo)로 할 수 있지만 보안에 취약하기 때문에 안 쓰는 게 좋음
        switch(operator) {
            case '+' :
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;

                //더하기는 int형으로 바꿔줘야하지만 곱하기 나누기 빼기는 자동으로 정수로 계산됨
            case '-' :
                $result.value = numOne - numTwo;
                break;
            case '*' :
                $result.value = numOne * numTwo;
                break;
            case '/' :
                $result.value = numOne / numTwo;
                break;
        }
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
});
document.querySelector('#clear').addEventListener('click', () => {
    $result.value = '';
    $operator.value = '';
    numOne = '';
    numTwo = '';
    operator = '';
});
