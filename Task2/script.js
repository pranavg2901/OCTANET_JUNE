const inputField = document.querySelector(".input-field textarea"),
    todolist = document.querySelector(".todolists"),
    pendingNum = document.querySelector(".pending-num"),
    clearbutton = document.querySelector(".clear");


function alltask(){
    let tasks = document.querySelectorAll(".pending")
    pendingNum.textContent= tasks.length === 0 ? "no" : tasks.length;
}

inputField.addEventListener("keyup", (e) => {
    let inputval = inputField.value.trim();
    if (e.key === "Enter" && inputval.length > 0){
        let litag = `<li class="list pending" onclick="handleevent(this)">
        <input type="checkbox" name="" id="">
        <span class="task">${inputval}</span>
        <i class="uil uil-trash" onclick="deletetask(this)"></i>
    </li>`
            todolist.insertAdjacentHTML("beforeend", litag);
            inputField.value ="";
            alltask();
    }
});

function handleevent(e){
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    alltask();
}


function deletetask(e){
    e.parentElement.remove();
    alltask();
}

clearbutton.addEventListener("click",() => {
    confirm("Are You Sure\nYou Want To Delete All Task")
    todolist.innerHTML = "";
    alltask();
});