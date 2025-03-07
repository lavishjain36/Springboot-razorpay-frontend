document.addEventListener("DOMContentLoaded",()=>{
    //target an element 
const nameinput=document.getElementById("username");
const ageinput=document.getElementById("userage");
const addbtn=document.getElementById("addbtn");
const tablebodyel=document.getElementById("tablebody");

loadTabledata();

addbtn.addEventListener("click",()=>{
    //get the input from user in input box
  const name=  nameinput.value;
  const age=  ageinput.value;

//   console.log(name,age);

// validation 
if(name==="" ||age===""){
    alert("Both fields are mandatory..")
    return
}

//create an object for 
const entry={name,age};


//create a function to add data to table
addDatatoTable(entry);
savetoLocalstorage(entry);


nameinput.value="";
ageinput.value="";


});


//function to add data table
function addDatatoTable(entry){
    const tr=document.createElement("tr");

    //create 3 tds->name,age,action
    const tdname=document.createElement("td");
    tdname.textContent=entry.name;
    const tdage=document.createElement("td");
    tdage.textContent=entry.age;
    const tdaction=document.createElement("td");

    //create a delete button
    const deletebtn=document.createElement("button");
    deletebtn.textContent="Delete";
    deletebtn.classList.add("delete-btn");//style to css



    //Add logic to delete the data row
    deletebtn.addEventListener("click",()=>{
        tr.remove();//row data from table
        removeFromLocalStorage(entry.name);
    })

    //append the button
    tdaction.appendChild(deletebtn);

    //add name to tr
    tr.appendChild(tdname);
    tr.appendChild(tdage);
    tr.appendChild(tdaction);



    //append tr to tbody
    tablebodyel.appendChild(tr);
}


//function to save the data local storage
function savetoLocalstorage(entry){
   let entries= JSON.parse(localStorage.getItem("entries"))||[];
   entries.push(entry);
   //save the data 
   localStorage.setItem("entries",JSON.stringify(entries));
}

//function to remove the data local storage-onclick delete button
function removeFromLocalStorage(name){
    let entries= JSON.parse(localStorage.getItem("entries"))||[];
    entries= entries.filter(entry=>entry.name!==name);
    localStorage.setItem("entries",JSON.stringify(entries));//save updated data 

}
    

//function to load saved data from local storage on loading pages

function loadTabledata(){
    let entries= JSON.parse(localStorage.getItem("entries"))||[];

    entries.forEach(entry=>addDatatoTable(entry));
}
})