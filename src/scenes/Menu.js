class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {

        this.load.image('virus', './assets/virus.png');
        this.load.image('menu', './assets/menu.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('menubackground', './assets/menuBackground.png');
        this.load.image('menuimg', './assets/menuimg.png');
        this.load.image('redbottle', './assets/redbottle.png');

        // Maria, should we move these to preload in Menu, so they are ready in play scene.?

        this.load.image('platform', './assets/platform.png');//placeholder image 
        this.load.image('platform1', './assets/platform1.png');//placeholder image 
        this.load.image('platform2', './assets/platform2.png');//placeholder image 
        this.load.image('platform3', './assets/platform3.png');//placeholder image 
        this.load.image('background1', './assets/background.png');//placeholder image 
        this.load.image('backgroundFront', './assets/backgroundFront.png');//placeholder image 
        this.load.image('bluebottle', './assets/bluebottle.png')
        //this.load.image('redAnimation', './assets/redAnimation.png');
        

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
        this.starfield = this.add.tileSprite(0, 0, 960, 640, 'menubackground').setOrigin(0, 0);
       //this.starfield1 = this.add.tileSprite(0, 0, 960, 640, 'menu').setOrigin(0, 0);
       this.sea = this.add.image(960/2, 640/2, 'menu').setAlpha(1);




        //this.add.text(centerX, centerY, 'SLUG LIFE check', menuConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY - 64, 'Press Up Arrow to Jump', menuConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY - 128, 'Press L to Start', menuConfig).setOrigin(0.5);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);



    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(keyL)) {
            
            this.scene.start("instructionsScene");   
             
        }
    }

}

