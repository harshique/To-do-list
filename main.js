const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function editBtnActive(e){
    // let b =  e.target?.parentElement?.innerHTML
    // const newStr = b?.substr(0, b.indexOf('<'));
    // console.log("a",newStr)
    var popup = document.querySelector('.popupWrapper')
    console.log('popup',popup)
    popup.classList.add('open')
    var inputText = document.querySelector('.editinput')
    var previousText = e.target.previousElementSibling.innerHTML;
    
    inputText.setAttribute("value",previousText)
    inputText.focus()
    inputText.setSelectionRange(inputText.value.length,inputText.value.length)
    e.target.setAttribute('edit',true)
    console.log("idheraaya",a)
    a.push(e.target)
}
    

function showTodo(){
    if(inputBox.value ===''){
        alert("you must type something bro!!");
    }
    else{
        console.log("harsh")
        let li=document.createElement("li");
        listContainer.appendChild(li);
        let spantag = document.createElement('span')
        spantag.innerHTML = inputBox.value;
        spantag.classList.add('textfield')
        // li.innerHTML=inputBox.value;
        li.appendChild(spantag)
        let editBtn = document.createElement('button')
        editBtn.innerHTML = 'Edit'
        editBtn.classList.add('editbutton')
        li.appendChild(editBtn)
        editBtn.addEventListener("click",editBtnActive)
        let span = document.createElement("span");
        span.innerHTML="&#215;"
        span.classList.add('crossBtn')
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
        else if(e.target.classList.contains('textfield')){
            e.target.parentElement.classList.toggle('checked')
            saveData();
        }
    else if(e.target.classList.contains('crossBtn')){
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
    saveData();
}
const resetList = document.getElementById("harsh");
resetList.addEventListener("keypress",function(e){
    if(e.key === "Delete"){
    e.preventDefault();
    document.getElementById("reset").click();
    }
<<<<<<< Updated upstream
})
=======
    saveData();
})

const field = document.getElementById("field-1")
const fieldName = document.getElementById("field-2")
function storeInfo(){
localStorage.setItem("email",field.value)
localStorage.setItem("name",fieldName.value)
}

var editButton = document.querySelectorAll('.editbutton')
const a = [...editButton]
a?.forEach((item)=>{
    item.addEventListener("click",function editBtnActive(e){
        // let b =  e.target?.parentElement?.innerHTML
        // const newStr = b?.substr(0, b.indexOf('<'));
        // console.log("a",newStr)
        var popup = document.querySelector('.popupWrapper')
        console.log('popup',popup)
        popup.classList.add('open')
        // popup.style.display = "flex"
        var inputText = document.querySelector('.editinput')
        var previousText = e.target.previousElementSibling.innerHTML;
        
        inputText.setAttribute("value",previousText)
        inputText.focus()
        inputText.setSelectionRange(inputText.value.length,inputText.value.length)
        e.target.setAttribute('edit',true)


        
       
    
        
    })
})

var saveBtn = document.querySelector('.saveBtn')
        function saveButtonClicked(){
            var inputvalue = $('.editinput')[0]?.value
            console.log("dekhokya hai isme",a,typeof a)
            a.forEach((item)=>{
                console.log(item.getAttribute("edit"))
                if(item.getAttribute("edit")){
                    item.previousElementSibling.innerHTML = inputvalue
                    document.querySelector('.closeBtn').click()
                    item.removeAttribute("edit")
                }

            })
            
            
        

        }
        saveBtn.addEventListener("click", saveButtonClicked)


var popup = document.querySelector('.popupWrapper')
popup.addEventListener("click", ()=>{
    if(popup.classList.contains('must') && flag != 1 ){
        console.log("classlist")
        popup.classList.remove('must')
    }
    popup.classList.remove('open')
})
var nothide = document.querySelector('.editpopup')
nothide.addEventListener(
"click", ()=>{
    var flag = 1;
    popup.classList.add('open')
    popup.classList.add('must')
    
  }
)
var closeBtn = document.querySelector('.closeBtn')
closeBtn.addEventListener("click", ()=>{
    
    popup.classList.add('doublemust')
    // if(popup.classList.contains("open") && popup.classList.contains("must")){
    //     popup.classList.remove('open')
    //     popup.classList.remove('must')
    // }
    setTimeout(function(){
        popup.classList.remove('doublemust')
        popup.classList.remove('open')
        popup.classList.remove('must')
}, 1000)
a.forEach((item)=>{
    console.log(item.getAttribute("edit"))
    
        item.removeAttribute("edit")
    

})
})

>>>>>>> Stashed changes
