import { createTask } from "../utils/api.js";
import { getData } from "./listTask.js";
import { validateDate } from "./date.js";

const addBtn = document.querySelector("#add-task-btn");
const closeBtn = document.querySelector("#close-btn");
const saveBtn = document.querySelector("#save-btn");


const inputTaskTitle = document.querySelector("#task-title");
const inputDescription = document.querySelector("#task-description");
const inputDate = document.querySelector("#date");
const selectTeam = document.querySelector("#select-team");



let data = {
    title:"",
    description:"",
    date:""
}

const API = axios.create({
    baseURL: "ddd"
})

addBtn.addEventListener('click', () => {
    document.querySelector("#modal").style.display = "flex";
    //alert("Mensja");
})

closeBtn.addEventListener('click', () => {
    document.querySelector("#modal").style.display = "none";
    //alert("Mensja");
})


saveBtn.addEventListener('click', (event) => {
    event.preventDefault();

    data = {
        title: inputTaskTitle.value,
        description: inputDescription.value,
        date: inputDate.value,
        assigned: selectTeam.value
    }

    //Date is after
    if(validateDate(data.date)){

        alert("La fecha elegida es inferior a la actual. No se puede guardar");
    }
    else
    {
        sendData(data);
    }
    //validateDate(data.date);

    //sendData(data);

    /*const title = inputTaskTitle.value;
    const description = inputTaskTitle.value;
    const date = inputDate.value;
    const team = selectTeam.value;*/
    /*console.log(data);
    console.log(team);*/
})


const sendData = async (data) => {
    const result = await createTask(data);

    if(result.status == 201)
    {
        alert("Task was created");
        document.querySelector("#modal").style.display = "none";
        removeCards();
        getData();
    }
    else
    {
        console.log(result);
        alert("It had a problem saving the task");
        
    }
    
}

const removeCards = () => {
    
    for (let x = 0; x < 30; x++) {
        const boardCardItem = document.querySelector("#board-card-item");
        boardCardItem ? boardCardItem.parentNode.removeChild(boardCardItem) : x = 500
        
    }
    
}
