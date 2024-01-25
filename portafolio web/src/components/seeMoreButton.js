import Arrow from "../icons/arrow.js";
const WorkContainer = document.getElementById("WorkContainer")
export default function SeeMore() {
    if (WorkContainer) {
        const buttonDiv = document.createElement("div");
        const button = document.createElement("button");
        buttonDiv.classList.add("buttonDiv");
        button.classList.add("SeeMore");
        button.textContent = "Ver más";


        buttonDiv.appendChild(button);
        WorkContainer.innerHTML = Arrow()
        WorkContainer.appendChild(buttonDiv);
    } else {
        console.log("No existe el elemento WorkContainer");
    }
}

