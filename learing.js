


const formEl = document.forms.feedback;

const typeEl=feedback.elements.type
const catageroy=[...typeEl]
const allcatageroy=document.querySelector("#all_catageroy")

const btnEl = document.querySelector("form button");
 allcatageroy.addEventListener("change",(event)=>{

const data=event.target
if(data===""){
  setTimeout(() => {
    alert("Thaks for No Need of any Message")
  },2000);
}
 })
 
const handleSubmit = (event) => {
  event.preventDefault();
  
};

 

formEl.addEventListener("submit", handleSubmit);

