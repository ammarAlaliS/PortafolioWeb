import CardClass from "../class/Card.js";
import Arrow from "../icons/arrow.js";
import CardComponent from "./CardComponent.js";
import CardComponentTwo from "./CardComponentTwo.js";


export default function Works() {
  const main = document.querySelector("main");
  if (main) {
    // Create elements
    const WorkSection = document.createElement("section");
    const mainDiv = document.createElement("div");
    const div = document.createElement("div");
    const titleBox = document.createElement("div");
    const title = document.createElement("h2");

    // Add classes to elements
    WorkSection.classList.add("WorkSection");
    WorkSection.setAttribute("id", "Projects");
    mainDiv.classList.add("mainDiv");
    mainDiv.setAttribute("id", "WorkContainer");
    div.classList.add("boxArticles");
    titleBox.classList.add("titleBox");
    title.classList.add("SectionTitle");

    // Add elements to the DOM
    main.appendChild(WorkSection);
    WorkSection.appendChild(mainDiv);

    // Append titleBox to mainDiv
    mainDiv.appendChild(titleBox);
    titleBox.appendChild(title);
    title.textContent = "Recent Projects";

    // Append articles to div (boxArticles)
    const cardInstances = CardClass.createInstances();
    cardInstances.forEach((card, index) => {
      const article = document.createElement("article");
      article.classList.add("articles", "animated-article");

      const cardComponent = clasificarParesImpares(index, card);

      // Append the content of the cardComponent to the article
      article.innerHTML = cardComponent;
      div.appendChild(article);
    });

    // Append div (boxArticles) to mainDiv
    mainDiv.appendChild(div);

    // Append buttonDiv to mainDiv
    SeeMore(mainDiv);
  } else {
    
  }
}

function SeeMore(WorkContainer) {
  if (WorkContainer) {
    const buttonDiv = document.createElement("div");
    const button = document.createElement("button");
    buttonDiv.classList.add("buttonDiv");
    button.classList.add("SeeMore", "animated-article");

    // Set the button text
    button.textContent = "Ver más";

    // Add the arrow to the existing content of the button
    button.insertAdjacentHTML("beforeend", Arrow());

    // Ensure that the Arrow() function returns valid HTML

    buttonDiv.appendChild(button);
    WorkContainer.appendChild(buttonDiv);
  } else {
    console.log("No existe el elemento WorkContainer");
  }
}

function clasificarParesImpares(currentIndex, card) {
  if (currentIndex % 2 !== 0) {
    return CardComponentTwo(card);
  } else {
 
    return CardComponent(card);
  }
}
