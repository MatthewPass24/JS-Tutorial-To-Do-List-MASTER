// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list")
const input = document.getElementById("input")

//Classes names
const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough"

//Show the date
const options = {weekday : "long", month: "short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options)
function addToDo(toDo){
    const item = `<li class = "item">
                    <i class="co fa fa-circle-thin" job="complete"></i>
                    <p class="text">Drink Coffee ${toDo} </p>
                    <i class="de fa fa-trash-o" job="delete"></i>
                </li>`
    
    const position = "beforeend"
    list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup", function(even){
    if(event.keyCode == 13) {
        const toDo = input.value;
        if(toDo){
            addToDo(toDo)
        }
    }
})