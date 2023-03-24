import Phaser from "phaser";

import "./assets/Walk_Down.png";
import "./assets/magecity.png";

let player: Phaser.Physics.Arcade.Sprite;

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
            this.load.spritesheet('magecity',
                'assets/magecity.png',
                { frameWidth: 32, frameHeight: 32 }
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
            this.anims.create({
                key: "stand",
                frames: this.anims.generateFrameNumbers('Walk_Down', { start: 3, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

        },

        update(time?: number, delta?: number) {
            let cursors = this.input.keyboard.createCursorKeys();
            if (cursors.left.isDown) {
                player.x -= 0.025 * delta;

                player.anims.play('walkdown', true);
            }
            else if (cursors.right.isDown) {
                player.x += 0.025 * delta;

                player.anims.play('walkdown', true);
            }
            if (cursors.up.isDown) {
                player.y -= 0.025 * delta;

                player.anims.play('walkdown', true);
            }
            else if (cursors.down.isDown) {
                player.y += 0.025 * delta;

                player.anims.play('walkdown', true);
            }
            else {
                player.anims.play('stand', true);
            }
        }
    } satisfies Phaser.Types.Scenes.CreateSceneFromObjectConfig
})