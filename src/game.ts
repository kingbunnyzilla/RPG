import Phaser from "phaser";
import "./assets/player.jpg";

let player:Phaser.Physics.Arcade.Sprite;
new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload(){
            this.load.spritesheet('player',
                'assets/player.jpg',
                { frameWidth: 36, frameHeight: 36 }
            );
        },
        create(){
            player = this.physics.add.sprite(100, 450, 'player');
            this.anims.create({
                key: "walk down",
                frames: this.anims.generateFrameNumbers('player',{start:0, end: 6}),
                frameRate: 10,
                repeat: -1
            });
        },
        update(){
            player.anims.play("walk down", true);

        }
    }
})