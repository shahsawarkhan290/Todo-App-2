const input=document.querySelector("#inp");
const ul=document.querySelector("#list-Container");

function Addtask(){
    if(!/^[A-Za-z\s]+$/.test(input.value)){
alert("you can store only Alphabets");
}


    else if(input.value!=""){
store();
input.value="";
 browdata();
}
else{
    alert("You must write something")
}
}
function store () {
      let li=document.createElement("li");
        
     li.innerHTML=input.value;
    ul.appendChild(li);
      let span=document.createElement("span");
        span.innerHTML="\u00d7";
    li.appendChild(span);
}

ul.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
 browdata();
     }
  else if(e.target.tagName==="SPAN"){
     e.target.parentElement.remove();
  browdata();
} 
}),false;    
function browdata() {
    localStorage.setItem("data",ul.innerHTML);
}  
function keepdata()    {
    ul.innerHTML=localStorage.getItem("data");
}      
keepdata();
