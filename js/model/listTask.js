import { listTask } from "../utils/api.js";

const todoContainer = document.querySelector("#todo-container");


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

        let newTaskHTML = `
            <div class="board-card-item" id="board-card-item">
                <div class="board-card-item__stripe board-card-item__stripe--yellow"></div>
                <p class="board-card__item-title board-card__item-title--f-medium">${d.Task_Title}</p>
                <p class="board-card__item-title board-card__item-title--f-medium-2"><span style="font-weight: 400">Responsable: </span>${d.Assigned_To}</p>
                <p class="board-card__item-title board-card__item-title--f-medium-2"><span style="font-weight: 400">Plazo: </span>${d.Delivery_Time}</p>
            </div>
            `
            todoContainer.innerHTML += newTaskHTML; 
        return(
            //todoContainer.innerHTML += newTaskHTML; 
            //todoContainer
            "s"
            
        )
    });

    //console.log(result);
}
