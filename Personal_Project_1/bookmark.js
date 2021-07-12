const bookMark = document.querySelector(".bookMark");

//브라우저의 북마크 정보를 받아오는  변수 생성    
// const bookMarkList = document.querySelector('#bookmarklist');

let markList = [];


//추가버튼 누를 시 직접 웹주소 입력하게 구현해야 함
function handle_AddContentBtn() {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click",handle_removeContentBtn);
    const newID = markList.length + 1;
    delBtn.innerText = "X";
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newID;
    // 직접 웹주소를 입력받을 때 변수생성 예정
    bookMark.appendChild(li);
    const bookMarkOBj = {
        id: newID
    }
    markList.push(bookMarkOBj);
}

function handle_removeContentBtn(event){
  //삭제 버튼 클릭시 만들어진 항목 하나를 삭제
    const btn = event.target;
    const li = btn.parentNode;
    bookMark.removeChild(li);
    const cleanBookmark = markList.filter(function(content){

        return content.id !== parseInt(li.id);
    });
    console.log(markList, cleanBookmark);
    markList = cleanBookmark;
}


function bookMark_Store() {
  // 버튼을 눌렀을 때 작동하는 핸들 함수를 만들어서 계속해서
  // 수행 할 수 있게 해야함.
  // 추가, 삭제, 이름수정, 동기화 기능 추가예정
    // console.log(addBtn);
    // addBtn.addEventListener("click",handle_AddContentBtn);
}


function init(){
    bookMark_Store();
}

init();
