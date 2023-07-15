const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function showTodo(){
    if(inputBox.value ===''){
        alert("you must type something bro!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="&#215;"
        li.appendChild(span);
        
    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

inputBox.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
    event.preventDefault();
    document.getElementById("btn").click();
    }

});

function doReset(){
    if(listContainer.innerHTML != ""){
    listContainer.innerHTML = "";
    }
    else{
        alert("There is nothing to delete !!")
    }
}
const resetList = document.getElementById("harsh");
resetList.addEventListener("keypress",function(e){
    if(e.key === "Delete"){
    e.preventDefault();
    document.getElementById("reset").click();
    }
})