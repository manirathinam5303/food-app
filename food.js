let f_input = document.getElementById("input");

let f_btnval = document.getElementById("btn");
let food_items = document.getElementById("food_container");
let food_list = document.getElementById("food_list");
let no_list=document.getElementById("no_list")




const handleInput =() => {
  const textnode = document.createTextNode (f_input.value) ;
  const li = document.createElement("li");
  let divitem=document.createElement("div")
  let divbtn=document.createElement("div")
  li.append(divitem,divbtn)
  
  divbtn.innerHTML='<i class="fa-solid fa-xmark"></i>'
  divbtn.parentElement.setAttribute('onclick',"removeEl(event)")
  
  li.className = "food_items";
  divitem.append(textnode);
  food_list.append(li);
  li.append(divitem);
  li.append(divbtn)
  

  localStorage.setItem(
    "foodval",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("foodval") || "[]"),
      { foodval: f_input.value },
    ])
  );

  f_input.value = "";
  refersUI()
}
document.addEventListener("DOMContentLoaded",()=>{
  const fetchfoodlist=[...JSON.parse(localStorage.getItem("foodval")),]
  fetchfoodlist.forEach((items)=>{
    const textnode = document.createTextNode (items.foodval) ;
  const li = document.createElement("li");
  let divitem=document.createElement("div")
  let divbtn=document.createElement("div")
  li.append(divitem,divbtn)
  
  divbtn.innerHTML='<i class="fa-solid fa-xmark"></i>'
  divbtn.parentElement.setAttribute('onclick',"removeEl(event)")
  
  li.className = "food_items";
  divitem.append(textnode);
  food_list.append(li);
  li.append(divitem);
  li.append(divbtn)
  })
  
})
f_input.addEventListener("keyup",(event)=>{
  if(event.key === "Enter"){
    handleInput()
  }
  else if(event.key ==="keyZ" && (event.ctrlKey || event.metaKey)){
    f_input.value="";
  }
})

f_btnval.addEventListener("click", handleInput);
function removeEl(event) {
  const exixtingEl = event.target.parentNode.parentNode;
  //console.log(event.target.parentNode.parentNode)
  exixtingEl.remove();

  refersUI()
}
function refersUI(){
  if(food_items.children.length > 0){
    no_list.hidden=true;
  }
  else{
    no_list.hidden=false;

  }

}
  // food_items.children.length >0 ?(no_list.hidden=true):(no_list.hidden=false);
  // console.log(no_list)
  