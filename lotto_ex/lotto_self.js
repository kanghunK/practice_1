const $result = document.querySelector("#winballNum"),
    $bonus = document.querySelector(".bonus"),
    $inputArray = document.querySelectorAll("input"),
    $startBtn = document.querySelector(".startLotto"),
    $inputlottoNum = document.querySelector(".inputLottoNum"),
    $indicator = document.querySelector(".resultRate");


// 전체 45개 숫자 배열에 넣기
const wholeNum = Array(45).fill().map((e, i) => {
    return i + 1;
});
//45개 숫자를 섞어서 저장하는 배열
const shuffle = [];


while (wholeNum.length > 0) {
    const random = Math.floor(Math.random() * wholeNum.length);
    const spliceArray = wholeNum.splice(random, 1);
    shuffle.push(spliceArray[0]);
}

//당첨번호 저장배열
const winBalls = shuffle.splice(0, 6).sort((a, b) => a - b);        //shuffle의 원본을 바꾸지 않을려면 slice()를 사용한다.
const bonus = shuffle[6];

const ballColor = (number, $tag) => {
    if (number < 10) {
        $tag.style.backgroundColor = 'red';
        $tag.style.color = 'white';
    } else if (number < 20) {
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
    ballColor(number, $ball);
    $target.appendChild($ball);
}


const showBallNumber = () => {
    //공을 화면에 보여주는 메서드
    if (passValue === 0) {
        alert("번호가 정확히 입력되지 않았습니다.");
        return;
    }

    for (let index = 0; index < winBalls.length; index++) {
        //당첨공을 1초마다 보여주는 반복문 
        setTimeout(() => {
            ballChecking(winBalls[index], $result);
        }, (index + 1) * 1000);
    }

    setTimeout(() => {
        //보너스공 확인
        ballChecking(bonus, $bonus);
    }, 7000);

    //몇 등인지 화면에 표시
    let count = 0;
    for (let i = 0; i < lottoNum.length - 1; i++) {
        if (winBalls.includes(parseInt(lottoNum[i])))
            count++;
    }
    switch (count) {
        case 3:
            $indicator.append(document.createTextNode("5등에 당첨되었습니다.!"));
            break;
        case 4:
            $indicator.append(document.createTextNode("4등에 당첨되었습니다.!"));
            break;
        case 5:
            if (bonus === parseInt(lottoNum[6]))
                $indicator.append(document.createTextNode("2등에 당첨되었습니다.!"));
            else    
                $indicator.append(document.createTextNode("3등에 당첨되었습니다.!"));
            break;
        case 6:
            $indicator.append(document.createTextNode("1등에 당첨되었습니다.!"));
            break;
        default:
            $indicator.append(document.createTextNode("꽝입니다..."));
            break;
    }
}

//입력한 로또번호 저장하는 배열, 입력 확인값
let lottoNum = Array(7).fill();
let passValue = 0;

function init() {
    //시작 메서드

    $inputlottoNum.addEventListener("click", () => {
        $inputArray.forEach((e, i) => {
            lottoNum[i] = e.value;
            console.log(i, lottoNum[i]);
        });
        if (lottoNum.includes("")) {
            alert("비어 있는 값이 있습니다..다시입력하세요.");
            passValue = 0;
        }
        else {
            passValue = 1;
        }
    })
    $startBtn.addEventListener("click", showBallNumber);

}


init();







