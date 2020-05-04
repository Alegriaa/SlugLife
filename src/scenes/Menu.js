class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {

        
        this.load.image('menu', './assets/menu.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('menuBlackout', './assets/menuBlackout.png');
        this.load.image('title', './assets/title.png');
        this.load.image('instruc', './assets/MenuInstructions.jpg');
        this.load.image('highway', './assets/highway.png');
        this.load.audio('MenuMusic', './assets/MenuMusic.wav');
        this.load.audio('PlaySceneMusic', './assets/PlaySceneMusic.wav');
        this.load.audio('playTransition', './assets/instructionsPlayTransition.wav');

    }

    create() {
        let menuConfig = {
            fontFamily: 'Impact', // changed the font
            fontSize: '28px',

            color: '#EEE83E',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0

        }
        this.starfield = this.add.tileSprite(0, 0, 960, 640, 'title').setOrigin(0, 0);
       //this.starfield1 = this.add.tileSprite(0, 0, 960, 640, 'menu').setOrigin(0, 0);
       


 

        //this.add.text(centerX, centerY, 'SLUG LIFE check', menuConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY - 64, 'Press Up Arrow to Jump', menuConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY - 128, 'Press L to Start', menuConfig).setOrigin(0.5);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        //music = this.sound.add('MenuMusic');



    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(keyL)) {
        
            
            this.scene.start('instructionsScene');  
              
            } 
            
             
            
            
        }
    }


