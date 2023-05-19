
let addButton=document.getElementById("add");


addButton.addEventListener("click",(e)=>{
e.preventDefault()
    console.log(e)
    let title= document.getElementById("title");
    localStorage.setItem("form-check",JSON.stringify[title])
    console.log("clicked");
})