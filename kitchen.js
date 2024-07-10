  let kitcheninput= document.getElementById("kitchen-input")
  let addbtn= document.getElementById("add-btn")
  let kitchenitemlist=document.getElementById("kitchen-itemlist")

 let kitcheninputstore;


  function setlocalstorage(){
  localStorage.setItem("kitcheninput",kitcheninputstore)
  }

  function getlocalstorage(){
  kitcheninputstore =localStorage.getItem("kitcheninput")
  }

 function buildUI(){
  let kitchenitemliststore=document.getElementById("kitchen-itemlist")
  let li = document.createElement("li")
  
  let spanE1 = document.createElement("span")
  li.appendChild(spanE1)
  spanE1.innerText=kitcheninputstore
  
  //li.innerText=kitcheninputstore

  kitchenitemliststore.appendChild(li)
  kitcheninput.value=""
  kitcheninput.focus()
  
  // create trash button
  let trashbtn = document.createElement("i")
  trashbtn.classList.add("fas","fa-trash")
  li.appendChild(trashbtn)
  
  

  // create edit button
  let editbtn = document.createElement("i")
  editbtn.classList.add("fas","fa-edit")
  li.appendChild(editbtn)
 }
  
  

  // step 2
  // add kitchen items
  function addkitchenimp(){
    let kitcheninputstore= kitcheninput.value
    
    //  set to local storage
    setlocalstorage()

   // get to local storage
    getlocalstorage()


  // create dom elements
  let kitchenitemliststore=document.getElementById("kitchen-itemlist")
  let li = document.createElement("li")
  
  let spanE1 = document.createElement("span")
  li.appendChild(spanE1)
  spanE1.innerText=kitcheninputstore
  
  //li.innerText=kitcheninputstore

  kitchenitemliststore.appendChild(li)
  kitcheninput.value=""
  kitcheninput.focus()

  // create trash button
  let trashbtn = document.createElement("i")
  trashbtn.classList.add("fas","fa-trash")
  li.appendChild(trashbtn)
  
  

  // create edit button
  let editbtn = document.createElement("i")
  editbtn.classList.add("fas","fa-edit")
  li.appendChild(editbtn)
  } 


  function deletekitchenlist(event){
    if(event.target.classList[1]==="fa-trash"){
       let item=event.target.parentelement
       item.remove()
    }
  }


// edit kitchen item
function edititemlist(event){
  if(event.target.classList[1]==="fa-edit"){
    let editvalue = prompt("please enter a new text")
    let item=event.target.parentelement
    let spanE1 = item.queryselector("span")
    spanE1.innerText=editvalue
  }
    
  
}
// step 1
// add an event listener to the button
addbtn.addEventListener("click",addkitchenimp)
kitchenitemlist.addEventListener("click",deletekitchenlist)
kitchenitemlist.addEventListener("click",edititemlist)

//localStorage.setItem("hello","i love front end")

// get data from local storage
// let name= localStorage.getItem("hello")
 //console.log(name)
 getlocalstorage();
 
 
