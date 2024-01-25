export default function CardComponent(card) {
    let linkText, linkStyle;
  
    switch (true) {
      case card.seeMore.includes("Finished"):
        linkText = "Finished";
        linkStyle = "finishedStyle";
        break;
      case card.seeMore.includes("Unfinish"):
        linkText = "Unfinished";
        linkStyle = "unfinishedStyle";
        break;
      case card.seeMore.includes("Progress"):
        linkText = "In Progress";
        linkStyle = "progressStyle";
        break;
        case card.seeMore.includes("Future"):
            linkText = "Future";
            linkStyle = "Future";
            break;
      default:
        linkText = "Default Text";
        linkStyle = "defaultStyle";
    }
  
    return `
      <div class="articleInformationTwo">
        <div class="divImg">
          <img src="${card.img}" alt="">
        </div>
        <div class="divCardInfo">
          <h2 class="titleTwo">${card.title}</h2>
          <ul class="boxLinksTwo">
            <h3 class="subTitleTwo">${card.subTitle}</h3>
            <li class="box"><a href="" class="${linkStyle}">${linkText}</a></li>
          </ul>
          <p class="descriptionTwo">${card.description}</p>
        </div>
      </div>
    `;
  }
  