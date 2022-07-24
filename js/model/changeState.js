import { modifyState } from "../utils/api.js";
const cardItem = document.querySelector(".board-card-item");
//const cardItem = document.querySelector(".board-card-item");
//todo-container
//const hammer = new Hammer(cardItem);

/*hammer.on('pan', (ev) => {
    console.log(ev);
})*/

/*const draggable = new Sortable.default(cardItem, {
    draggable:"div"
})*/


/*if (containers.length === 0) {
    return false;
  }*/

  /*const draggable = new Draggable.default(document.querySelectorAll('.board__todo-card'), {
    draggable: '.board-card-item'
  });*/


  const droppable = new Droppable.default(document.querySelectorAll('.board__todo-card'), {
    draggable: '.item',
    dropzone: '.dropzone'
  });
  
  //droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
  //droppable.on('droppable:returned', () => console.log('droppable:returned'));
  droppable.on('droppable:stop', () => changeColor());
  droppable.on('droppable:dropped', () => console.log("Solado------------"));
  droppable.on('drag:stopped', () => console.log("Stoppoed Event"));
  droppable.on('draggable:initialize', () => trigger());
  
  //droppable.on('drag:over:container', () => console.log("drag over other"));

  
  const padre = droppable.getClassNameFor("source:placed");

  console.log("Padre:");
  console.log(padre);

function trigger(){
    console.log("trigger ----------------");
}

  function changeColor()
  {
    const cardItem = document.querySelector(".board-card-item");
    
    //const cardItem = document.querySelector("[]");

    const parent = cardItem.parentNode;
    //cardItem.classList.add("board-card-item__stripe--blue");
    const id = cardItem.getAttribute("idcard");
    console.log(id);
    console.log("Es hora de cambiar color");
    console.log(cardItem);
    console.log(parent);
    //changeState();
  }


  export const changeState = async () => {
    const result = await modifyState(1);
    console.log(result);

  }

export function evento(){
    const cardItem = document.querySelector(".board-card-item");
    cardItem.addEventListener('click', (event) => {
        //document.querySelector("#modal").style.display = "flex";
        console.log(event);
    })
}



/*const sortable = new Sortable.default(cardItem, {
    sortable:"div"
});*/

//draggable.on("drag:start", (e) => console.log(e));
