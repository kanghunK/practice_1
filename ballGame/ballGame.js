const $form = document.querySelector("#form"),
  $input = document.querySelector("#input"),
  $logs = document.querySelector("#logs");

const numbers = [],
  solutions = [];
let outCount = 0;

for (let i = 0; i < 9; i += 1)
  numbers.push(i + 1);

  
//solutions에 해당하는 값 4개 뽑기 
for (let i = 0; i < 4; i += 1) {
  let index = Math.floor(Math.random() * numbers.length);

  solutions.push(numbers[index]);
  numbers.splice(index, 1);
}

const tries = [];

//검사하는 코드
function checkInput(input) {
  if (input.length !== 4) {
    return alert('4자리 숫자를 입력해 주세요.');
  }
  if (new Set(input).size !== 4) {
    return alert('중복되지 않게 입력해 주세요.');
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
  }
  return true;
}   


function homerunCheck(value) {
  // 홈런인지 아웃인지 볼인지 체크값 반환 
  let ballnum = 0,
  strike = 0;
   
  // 홈런, 볼 개수 카운트하기
  for (let i = 0; i < 4; i++) {
    if (solutions.indexOf(parseInt(value[i])) === i) {
      strike += 1;
    } else if (solutions.includes(parseInt(value[i]))) {
      ballnum += 1;
    }
  }
  $logs.append(`${value} : ${strike} 스트라이크 ${ballnum} 볼`,document.createElement('br'));

  if (strike === 4)
    return 1;
  else if (ballnum === 0 && strike === 0) {
    return -1;
  }
  else {
    return 0;
  }
} 


$form.addEventListener('submit', (event) => {
  event.preventDefault(); //기본동작 막기
  // const value = event.target[0];
  const value = $input.value;
  $input.value = '';

  if (!checkInput(value)) {
    return;
  }

  //입력값 문제 없음
  let Checknum = homerunCheck(value);

  if (tries.length >= 9) {
    // 시도횟수가 10회면 종료
    const message = document.createTextNode(`10회 도전 끝..패배! 정답은 ${solutions.join('')}`);
    $logs.appendChild(message);
    return;
  }

  if (Checknum === 1) {
    //홈런이 맞다면
    console.log('홈런');
  } else if (Checknum === 0) {
    // 홈런,아웃 아니라면 볼 표시
    console.log('볼');
  } else {
    // 0스트라익 0볼이면 아웃
    outCount += 1;
    console.log('아웃');
  }
// 3아웃이라면 종료..
  if (outCount === 3) {
    $logs.append(document.createTextNode(`3번 아웃되어서 종료합니다. 정답은 ${solutions.join('')}`));
    $logs.append(document.createElement('br'));
    return;
  }
    
  

  tries.push(value);

})




