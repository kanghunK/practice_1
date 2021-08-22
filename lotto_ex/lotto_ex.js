const $result = document.querySelector("#결과창"),
    $bonus = document.querySelector(".bonus");


// 전체 45개 숫자 배열에 넣기
const wholeNum = Array(45).fill().map((e, i) => {
    return i + 1;
});

const shuffle = [];
// function randomExtract() {
//     const random = Math.floor(Math.random() * wholeNum.length);
//     wholeNum.splice(random, 1);
//     return random;
// }

// let lottoNum = Array(6).fill().map(() => {
//     return randomExtract();
// }),
//     bonus = randomExtract();

while (wholeNum.length > 0) {
    const random = Math.floor(Math.random() * wholeNum.length);
    const spliceArray = wholeNum.splice(random, 1);
    shuffle.push(spliceArray[0]);
}
const winBalls = shuffle.splice(0, 6).sort((a, b) => a - b);        //shuffle의 원본을 바꾸지 않을려면 slice()를 사용한다.
const bonus = shuffle[6];
// console.log(winBalls,bonus);

const ballColor = (number,$tag) => {
    if (number < 10) {
        $tag.style.backgroundColor = 'red';
        $tag.style.color = 'white';
    } else if (number <20 ) {                
        $tag.style.backgroundColor = 'orange';
    } else if (number < 30) {
        $tag.style.backgroundColor = 'yellow';
    } else if (number < 40) {
        $tag.style.backgroundColor = 'blue';
        $tag.style.color = 'white';
    } else {
        $tag.style.backgroundColor = 'green';
        $tag.style.color = 'white';
    }
}

const ballChecking = (number, $target) => {
    // 공의 숫자를 화면에 표시하는 함수
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = number;
    ballColor(number,$ball);
    $target.appendChild($ball);
}


for (let index = 0; index < winBalls.length; index++) {
    setTimeout(() => {
        // ballColor(winBalls[index],$ball)
        ballChecking(winBalls[index],$result);
    }, (index + 1) * 1000);
}
// for (var index = 0; index < winBalls.length; index++) {
//     (function(j){        //함수를 선언하자마자 실행하는 구문
//         setTimeout(() => {
//             ballChecking(winBalls[j],$result);
//         }, (j + 1) * 1000);
//     })(index);
// }    // var을 사용했을 경우 var은 함수 스코프단위라 정상적인 실행이 되지 않는다.
        // 따라서 함수에 감싸서 실행하면 index 값이 j 매개변수로 넘어가고 함수 안에 값이 고정된다.

setTimeout(() => {
    ballChecking(bonus,$bonus);
}, 7000);







