import 'phaser';
import logoImg from "../assets/logo.png";
import B from "../assets/B.png";
import BJ from "../assets/BJ.png";
import BP from "../assets/BP.png";
import JB from "../assets/JB.png";
import PB from "../assets/PB.png";
import JBP from "../assets/JBP.png";
import PBJ from "../assets/PBJ.png";
import JBJ from "../assets/JBJ.png";
import PBP from "../assets/PBP.png";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image("logo", logoImg);
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
    const B = this.add.image(400, 150, "B");
    B.setInteractive();
    this.input.on('gameobjectdown',this.onObjectClicked);
  }

  onObjectClicked(pointer, gameObject) {
    gameObject.x += 10;
  };

}
