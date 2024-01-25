import Moon from "../icons/moon.js";
import Sun from "../icons/sun.js";

export default function _switch() {
    const switchComponent = document.querySelector(".switchComponent");
    
    if (switchComponent) {
        switchComponent.innerHTML = Sun();
        switchComponent.addEventListener('click', () => {
            const body = document.getElementById("backgroundImg");

            if (body && body.classList.contains('light')) {
                body.classList.remove('light');
                body.classList.add('dark');
                switchComponent.innerHTML = Moon(); 
            } else {
                body.classList.remove('dark');  
                body.classList.add('light');  
                switchComponent.innerHTML = Sun();
            }
        });
    } else {
       
    }
}
