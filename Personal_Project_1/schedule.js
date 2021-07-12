const table = document.querySelector("table"),
    addBtn = document.querySelector("#addBtn"),
    InputBox = document.querySelectorAll(".scheduleInput"),
    checkBtn = document.querySelector(".checkBtn");
    
// const SHOWING = "showing"  
const sch_Date = InputBox[0];
const sch_Content = InputBox[1];


function handle_SchduleSumit(event) {
    const tr = document.createElement('tr');
    const content = [];
    const tbody = table.querySelector("tbody");

    content.push(sch_Date.value);
    content.push(sch_Content.value);
    
    if(sch_Date.value !="" && sch_Content.value !="") {

        tr.innerHTML = "<th scope =row >"+content[0]+"</th>"+
                    "<td>"+content[1]+"</td>";
        tbody.append(tr);
        content.splice(0);

        console.log(sch_Date.value,sch_Content.value);
        sch_Date.classList.remove(SHOWING);
        sch_Content.classList.remove(SHOWING);
        checkBtn.classList.remove(SHOWING);
    }
    else {
        content.splice(0);
    }
    //내가 원하는 이벤트만 동작하게 하고 싶을 떄 쓰는 메소드.
    event.stopImmediatePropagation();
    event.preventDefault();
}



function addSchedule() {

    sch_Date.value ="";
    sch_Content.value ="";
    
    sch_Date.classList.add(SHOWING);
    sch_Content.classList.add(SHOWING);
    checkBtn.classList.add(SHOWING);
    
    checkBtn.addEventListener("click",handle_SchduleSumit);
        
}
    

function init() {
    addBtn.addEventListener("click",addSchedule);
}

init();
