import { listTask } from "../utils/api.js";

const todoContainer = document.querySelector("#todo-container");
const doingContainer = document.querySelector("#doing-container");


let data = [];

window.addEventListener('load', () => {
    console.log("cargada");
    //alert("mensaje")
    getData()
    //testData();
})

//window.onload = function() {msg()}


export const getData = async () => {
    const result = await listTask();
    data = result.data;
    console.log(data);


    data.map(d => {

        if(d.State == "To do")
        {
            let newTaskHTML = `
            <div class="board-card-item item" id="board-card-item" idcard="${d.id}" onclick="alert('dd')">
                <div class="board-card-item__stripe board-card-item__stripe--yellow"></div>
                <p class="board-card__item-title board-card__item-title--f-medium">${d.Task_Title}</p>
                <p class="board-card__item-title board-card__item-title--f-medium-2"><span style="font-weight: 400">Responsable: </span>${d.Assigned_To}</p>
                <p class="board-card__item-title board-card__item-title--f-medium-2"><span style="font-weight: 400">Plazo: </span>${d.Delivery_Time}</p>
            </div>
            `
            todoContainer.innerHTML += newTaskHTML;
        }

        else if(d.State == "doing")
        {
            let newTaskHTML = `
            <div class="board-card-item item" id="board-card-item" idcard="${d.id}" onclick="alert('dd')">
                <div class="board-card-item__stripe board-card-item__stripe--blue"></div>
                <p class="board-card__item-title board-card__item-title--f-medium">${d.Task_Title}</p>
                <p class="board-card__item-title board-card__item-title--f-medium-2"><span style="font-weight: 400">Responsable: </span>${d.Assigned_To}</p>
                <p class="board-card__item-title board-card__item-title--f-medium-2"><span style="font-weight: 400">Plazo: </span>${d.Delivery_Time}</p>
            </div>
            `
            doingContainer.innerHTML += newTaskHTML; 
        }

        
            
        return(
            //todoContainer.innerHTML += newTaskHTML; 
            //todoContainer
            "s"
            
        )
    });

    const cardItem = document.querySelector("#board-card-item");
    cardItem.addEventListener('click', (event) => {
        //document.querySelector("#modal").style.display = "flex";
        console.log(event);
    })
    //console.log(result);
}
