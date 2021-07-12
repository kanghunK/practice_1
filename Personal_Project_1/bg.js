const body = document.querySelector("body");

const IMG_NUM = 3;

//랜덤 숫자 생성
function randomGenerator(){
    const randomNum = Math.floor(Math.random()*3);
    return randomNum;
}

// 이미지 태그 만들어서 body에 추가하는 함수
function paintImage(imgNumber){
    const image = new Image();
    image.src = `./images/img_${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}


function init(){
    const randomNum = randomGenerator();
    paintImage(randomNum);
}

init();