import { listTask } from "../utils/api.js";

let data = [];

window.addEventListener('load', () => {
    console.log("cargada");
    //alert("mensaje")
    getData()
})

//window.onload = function() {msg()}


const getData = async () => {
    const result = await listTask();
    data = result.data;
    console.log(data);
    //console.log(result);
}


function msg(){
    alert("Mensaje")
}