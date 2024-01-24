export default function CardComponentTwo(card){
    return `
    <div class="articleInformation ">
        <h2 class="title">${card.title}</h2>
        <h3 class="subTitle">${card.subTitle}</h3>
        <p class="description">${card.description}</p>
        <ul class="boxLinks">
            <li class="box"><a href="${card.imgLink}"></a></li>
        </ul>
        <div class="backdrop"></div>
    </div>
  `;
}