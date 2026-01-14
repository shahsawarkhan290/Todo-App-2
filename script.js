const input=document.querySelector("#inp");
const ul=document.querySelector("#list-Container");

function Addtask(){
    if(input.value!=""){
    console.log("button was clicked");
    console.log(input.value);
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
