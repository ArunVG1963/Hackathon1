// Event Listener added for name div entry

document.getElementById("nameBtn").addEventListener("click", DisplayNameText);


function DisplayNameText() {

    const nameEntered = document.getElementById("name");
    const namePlaceholder = document.getElementById("NameText");
    if(nameEntered.value){
    namePlaceholder.classList.remove("hiddenDiv");
    console.log(nameEntered.value);
    namePlaceholder.innerText = `Welcome to your Quiz ${nameEntered.value}`;
    document.getElementById("nameDiv").classList.add("hiddenDiv");
    console.log('value saved in ls:', nameEntered.value);
    window.localStorage.setItem("name", `${nameEntered.value}`);
      
    }
}