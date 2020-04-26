'use strict'

let config = {
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH  
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

let keyL, keyJ;
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let virus = null;
let ground = null;
let cursors = null;
const virusWidth = 40;
const virusHeight = 80;
const virusVelocity = 100;

