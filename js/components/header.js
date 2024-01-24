import { HEADER_DATA } from "./data/Constantes.js";
import _switch from "./switch.js";

export default function Header() {
    const header = document.getElementById('headerId');
    function animateNavbar() {
        const header = document.getElementById('headerId');
        header.style.position = 'fixed';
        header.style.left = '0';
        void header.offsetWidth;
        header.style.transition = 'left 1s ease-in';
    
        // Configura el estilo final (centro)
        header.style.left = '50%';
        header.style.transform = 'translateX(-50%)';
    }
    
    // Llama a la función cuando sea necesario, por ejemplo, al cargar la página
    animateNavbar();
    
    
    animateNavbar();
    const navElement = document.createElement('nav');
    navElement.classList.add('nav');
    const ulElement = document.createElement('ul');
    ulElement.classList.add('navbar-list');

    HEADER_DATA.forEach((link) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add("links")
        a.href = `#${link}`; 
        a.textContent = link;
        // Agregar event listener para manejar el clic
        a.addEventListener('click', (event) => {
            event.preventDefault();  // Prevenir el comportamiento predeterminado del enlace
            const targetElement = document.getElementById(link);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              
                
            }
        });

        li.appendChild(a);
        ulElement.appendChild(li);
    });

    const icons = document.createElement('div');
    icons.classList.add('switchComponent');
    icons.innerHTML = _switch();

    navElement.appendChild(ulElement);
    navElement.appendChild(icons);
    header.appendChild(navElement);
}
