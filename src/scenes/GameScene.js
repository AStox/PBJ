import 'phaser';
import B from "../assets/B.png";
import BJ from "../assets/BJ.png";
import BP from "../assets/BP.png";
import JB from "../assets/JB.png";
import PB from "../assets/PB.png";
import JBP from "../assets/JBP.png";
import PBJ from "../assets/PBJ.png";
import JBJ from "../assets/JBJ.png";
import PBP from "../assets/PBP.png";
import config from "../config/config.js";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }


  preload() {
    this.load.image("B", B);
    this.load.image("BJ", BJ);
    this.load.image("BP", BP);
    this.load.image("JB", JB);
    this.load.image("PB", PB);
    this.load.image("JBP", JBP);
    this.load.image("PBJ", PBJ);
    this.load.image("JBJ", JBJ);
    this.load.image("PBP", PBP);
  }

  create() {
    const plateCount = 4;
    let plates = [];
    for (let i = 0; i < plateCount; i++) {
      const plate = {
        x: ((i+1)*config.width)/(plateCount+1),
        y: config.height - 200,
        stack: [],
      };
      plates.push(plate);
    }
    let B = this.add.image(100, 100, 'B').setInteractive();
    this.input.setDraggable(B);


    this.input.on('dragstart', function (pointer, gameObject) {

        this.children.bringToTop(gameObject);

    }, this);

    this.input.on('dragend', function (pointer, gameObject) {
      let plate;
        console.log(plates.length);
      for(let i = 0; i < plates.length; i++) {
        const dist = Phaser.Math.Distance.Between(plates[i].x, plates[i].y, gameObject.x, gameObject.y)
        console.log(!plate);
        if (!plate || dist < plate.dist) {
          plate = {
            x: plates[i].x,
            y: plates[i].y,
            dist: dist,
          };
        }
      }
      console.log(plate)
      if (plate) {
        gameObject.x = plate.x;
        gameObject.y = plate.y;
      };

    }, this);
    
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

  }

}
