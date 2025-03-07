
const appendvalue=(value)=>{
    document.getElementById("display").value+=value;
}


const  cleardisplay=()=>{
    document.getElementById("display").value="";
}


const  backspace=()=>{
    let displayval=document.getElementById("display");
    displayval.value= displayval.value.slice(0,-1);        

}


const calculatresult=()=>{
    try {
        document.getElementById("display").value=eval(document.getElementById("display").value);

    } catch (error) {
       document.getElementById("display").value="Error"; 
    }
}