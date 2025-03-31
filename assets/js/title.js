let titleDIVElement = document.getElementById("titleDIVElement")

let titleString = "The+Machine+Under+the+Full+Moon";
let titleCharacterArray = titleString.split("")

for(i=0;i<titleCharacterArray.length;i++){

    let characterH1Element = document.createElement("h1");

    if(titleCharacterArray[i] == "+"){
        characterH1Element.innerText += "\xa0";
    } else {
        characterH1Element.innerText += titleCharacterArray[i]
    }

    titleDIVElement.appendChild(characterH1Element)

    characterH1Element.addEventListener("mouseenter",()=>{
        characterH1Element.style.color = "yellow"
        console.log("yes")
    })
}