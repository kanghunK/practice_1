const $input = document.querySelector('input'),
    $btn_start = document.querySelector('#start'),
    $btn_input = document.querySelector('#input'),
    $order = document.querySelector('#order'),
    $word = document.querySelector('#word');

let newWord, word, order = 1;

const progressGame = (number) => {
    newWord = $input.value;
    if (newWord.length != 3) {
        alert('3글자를 입력하셔야 됩니다.');
        console.log(newWord);
    } else {
        if (!word || newWord[0] === word[word.length - 1]) {
            word = newWord;
            $word.textContent = word;
            if (order === number) {     //참가자 순서 넘기기
                order = 1;
            } else {
                order++;
            }
            $order.textContent = order;
            console.log(order,number);
        } else {
            alert('일치하지 않는 값입니다.');
            // console.log(newWord[0],word[word.length - 1]);
        }
    }
    $input.value = '';
    $input.focus();
}

const startGame = () => {
    word = null, order = 1;
    const number = parseInt(prompt('몇 명입니까'));
    if(number){
        if (number < 2) {    //2명 미만으로 참가할 경우
            alert('최소 2명이상 참가해야합니다.');
        } else {            //입력받는 과정
            $order.textContent = order;
            $word.textContent = word;
            $btn_input.onclick = function() {       //인자값 전달시 onclick 사용해야 반복호출 방지
                progressGame(number);
            };
        }
    }
}




function init() {
    $btn_start.addEventListener('click', startGame);
}

init();

