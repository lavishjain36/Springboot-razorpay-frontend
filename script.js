document.addEventListener("DOMContentLoaded",()=>{
    //targeted all the element in html.
    const taskinputelem=document.getElementById("taskinput");
    const addtaskbtnelem=document.getElementById("addtaskbtn");
    const tasklistelem=document.getElementById("tasklist");


    addtaskbtnelem.addEventListener("click", addTask);




    function addTask(){
    const tasktext =taskinputelem.value;
    console.log(tasktext);

    if(tasktext==""){
        alert("Please enter task details..");
        return;
    }

    //create new list of items
     const lielement=document.createElement("li");


     const spanelement=document.createElement("span");
     spanelement.textContent=tasktext;


     spanelement.addEventListener("click",()=>{
        spanelement.classList.toggle("Completed");
     })

     //create delete button
     const deletebtn=document.createElement("button");
     deletebtn.textContent="X";
     deletebtn.classList.add("delete-btn");
     deletebtn.addEventListener("click",()=>{
        lielement.remove();
     })
     
     

     lielement.appendChild(spanelement);
     lielement.appendChild(deletebtn);
     tasklistelem.appendChild(lielement);

     taskinputelem.value="";
    }

})