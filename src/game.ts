import Phaser from "phaser";
import "./assets/Walk_Down.png";
import "./assets/dude.png";

let player: Phaser.Physics.Arcade.Sprite;
let player2: Phaser.Physics.Arcade.Sprite;

new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload() {
            this.load.spritesheet('Walk_Down',
                'assets/Walk_Down.png',
                { frameWidth: 32, frameHeight: 32 }
            );
            this.load.spritesheet('dude',
                'assets/dude.png',
                { frameWidth: 32, frameHeight: 48 }
            );
        },

        create() {
            player = this.physics.add.sprite(100, 450, 'Walk_Down');
            this.anims.create({
                key: "walkdown",
                frames: this.anims.generateFrameNumbers('Walk_Down', { start: 0, end: 7 }),
                frameRate: 10,
                repeat: -1
            });
            player2 = this.physics.add.sprite(200, 450, 'dude');
            this.anims.create({
                key: 'left',
                frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

        },

        update() {
            player.anims.play("walkdown", true);
            player2.anims.play("left", true);

        }
    }
})