const addBtn = document.querySelector("#add-task-btn");
const closeBtn = document.querySelector("#close-btn");

addBtn.addEventListener('click', () => {
    document.querySelector("#modal").style.display = "flex";
    //alert("Mensja");
})

closeBtn.addEventListener('click', () => {
    document.querySelector("#modal").style.display = "none";
    //alert("Mensja");
})