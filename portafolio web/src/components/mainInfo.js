import { MAIN_INFO } from "../data/Constantes.js";
import Github from "../icons/Github.js";
import LinkedIn from "../icons/LinkedIn.js";
import Instagram from "../icons/Instagram.js";
import Location from "../icons/Localation.js";


export default function Main() {
  // create elements

  const container = document.querySelector(".container");
  const main = document.createElement("main");
  const section = document.createElement("section");
  const div = document.createElement("div");
  const titleContainer = document.createElement("div");
  const h1 = document.createElement("h1");
  const hireButton = document.createElement("a");
  const p = document.createElement("p");
  const ul = document.createElement("ul");
  const fragment = document.createDocumentFragment();
  const span = document.createElement("span");

  // add content to the elements

  h1.textContent = MAIN_INFO[0].pageTitle;

  p.innerHTML = MAIN_INFO[0].pageInfo
    .map((titulo, index) => {
      const clase = MAIN_INFO[0].pageClass[index] || "";
      return `<span class="${clase}">${titulo}</span>`;
    })
    .join("");

  hireButton.textContent = "Disponible a nuevos proyectos";
  hireButton.href = "https://www.linkedin.com/in/ammar-ali-384625262/";

  //    recorrer array

  MAIN_INFO[0].pageLinks.forEach((link, index) => {
    const li = document.createElement("li");
    li.classList.add("li");
    const a = document.createElement("a");
    a.classList.add("linkLetter");

    switch (index) {
      case 0:
        a.innerHTML = Github() + link;

        break;
      case 1:
        a.innerHTML = LinkedIn() + link;
        break;
      case 2:
        a.innerHTML = Instagram() + link;
        break;
      default:
        break;
    }
    if (MAIN_INFO[0].href[index]) {
      a.href = MAIN_INFO[0].href[index];
      console.log(MAIN_INFO[0].href[index]);
    }
    li.appendChild(a);

    fragment.appendChild(li);
  });
  const country = MAIN_INFO[0].country;
  const localationBox = document.createElement("li");

  localationBox.innerHTML = Location() + country[0].toLocaleUpperCase() + country[1].toLocaleUpperCase() ;
  localationBox.classList.add("location");
  ul.appendChild(localationBox);

  // css class for DOM Elements

  main.classList.add("main");
  container.setAttribute("id", "Home");
  main.setAttribute("id", "miId");
  section.classList.add("section");
  div.classList.add("div");
  titleContainer.classList.add("titleContainer");
  h1.classList.add("h1");
  p.classList.add("p");
  ul.classList.add("ul");
  hireButton.classList.add("hireButton");

  //  appends

  div.appendChild(titleContainer);
  titleContainer.appendChild(h1);
  titleContainer.appendChild(hireButton);
  div.appendChild(p);
  div.appendChild(ul);
  p.appendChild(span);

  // Añadir el contenedor del título al div principal

  ul.appendChild(fragment);

  section.appendChild(div);
  main.appendChild(section);
  container.appendChild(main);
}
