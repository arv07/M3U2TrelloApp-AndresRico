import { createTask } from "../utils/api.js";

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

    sendData(data);

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
    }
    else
    {
        console.log(result);
        alert("It had a problem saving the task");
        
    }
    
}



