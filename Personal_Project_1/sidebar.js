const sidebar = document.querySelector(".sidebar"),
    sidebarBtn = document.querySelector(".menuBar_Toggle"),
    sidebarBtn_Master = document.querySelector('.menuBar_MasterToggle i.fas');

console.log(sidebarBtn_Master);


function sidebarToggle() {
    let pressed = sidebarBtn_Master.getAttribute('aria-pressed') === 'true';
    // console.log(pressed);
    sidebarBtn_Master.addEventListener('click', (e) => {
        // let presseed = e.target.getAttribute('aria-pressed') === 'true';
        e.target.setAttribute('aria-pressed', String(!pressed));
        console.log(e.target,pressed);
        if(pressed === false) 
            sidebar.classList.add("showing");

    })

    sidebarBtn.addEventListener('click', (e) => {
        // let pressed = e.target.getAttribute('aria-pressed') === 'true';
        e.target.setAttribute('aria-pressed', String(!pressed));
        console.log(pressed);
        if (pressed === false)
            sidebar.classList.remove("showing");

    });
}

function init() {
    sidebarToggle();
}

init();