/*

Maria Feudo
Clemence Briat
Nicole Figg
Brian Alegria

Slug Life 
5/5/20

We utilized the process of developing this game as a way to cope with the difficult time 
we are living in. We created all of our own assets, and we produced all of the music within
the game. We implemented an area above the endless runner, with the intention to have the player 
be able to just relax in the clouds & enjoy the music while the game still continued. We are proud
of our implementation of our game "heaven", it was challenging to program cameras and changes in 
gravity since we were working with sprites and not images for our backgrounds which led us to several 
problems that we had to solve on our own. But, it was worth it, the player can collect points or 
take a break and vibe in the world we created.

Thank you.


*/

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
    scene: [Menu, Instructions, Play, End]
}

let game = new Phaser.Game(config);



let keyL, keyJ;

game.settings = {
    platformSpeed: -200,//this is the number that the platforms and ground are connected to, we could also seperate them into diff values easily
    smallSpeed: 6,  
}


let centerX = game.config.width/2;
let centerY = game.config.height/2;
let virus = null;
let ground = null;
let cursors = null;
let menuMusic = null;
let playSceneMusic = null;
let virusBottleSound = null;
const virusWidth = 40;
const virusHeight = 80;
//const virusVelocity = 100;
const tileSize = 35;
//var camera = this.cameras.main;


