const userName = document.querySelector(".userName"),
  form = document.querySelector(".text"),
  input = form.querySelector("input"),
  button = document.querySelector(".btnName");

const USER_LS = "currentUser",
  SHOWING = "showing";

//로컬 저장소에 NAME 저장
function saveName(nameValue) {
    localStorage.setItem(USER_LS,nameValue);
}

//기존 input박스를 가리고 Name을 보여줌
function paintingName(text) {
    form.classList.remove(SHOWING);
    userName.classList.add(SHOWING);
    userName.innerText = `${text}'s Page`;
}

//submit이 발생했을 경우 입력된 값을 받아서 localStorage에 전달
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintingName(currentValue);
    saveName(currentValue);
}


function askName() {
    // console.log(userName.classList,input.classList);
    form.classList.add(SHOWING);
    form.addEventListener("submit",handleSubmit);
}

function handle_ChangeName() {
    const checkvalue = confirm("이름을 수정하시겠습니까?");
    if (checkvalue === true) {
        userName.classList.remove(SHOWING);
        form.classList.add(SHOWING);
        form.addEventListener("submit",handleSubmit);
    }
}


//이름정보를 로드함
function loadName(){
      const currentUser = localStorage.getItem(USER_LS);
      if (currentUser === null) {
          askName();
      }else {
          paintingName(currentUser);
      }
      //수정버튼을 누르고 확인버튼누를 시 input박스 표시
      button.addEventListener("click",handle_ChangeName);
}


function init(){
    loadName();
}

init();
