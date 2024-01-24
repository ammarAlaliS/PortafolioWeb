import { WORKS } from "../data/Constantes.js";

export default class CardClass {
    // Propiedades
    title;
    subTitle;
    description;
    img;
    imgLink;
    seeMore;
    state ; 

    // Constructor
    constructor(title, subTitle, description, img, imgLink, seeMore, state) {
        this.title = title;
        this.subTitle = subTitle;
        this.description = description;
        this.img = img;
        this.imgLink = imgLink;
        this.seeMore = seeMore; 
        this.state = state
    }

    // Método para crear instancias de la tarjeta
    static createInstances() {
        // Crea y devuelve instancias de la clase Card
        return WORKS.map((work) => new CardClass(work.title, work.subTitle, work.description, work.img, work.seeMore, work.state, work.imgLink));
    }
}
