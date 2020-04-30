class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('virus', './assets/virus.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('background', './assets/menuBackground.png');

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
        this.starfield = this.add.tileSprite(0, 0, 960, 640, 'background').setOrigin(0, 0);
        this.add.text(centerX, centerY, 'SLUG LIFE check', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - 64, 'Press Up Arrow to Jump', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - 128, 'Press L to Start', menuConfig).setOrigin(0.5);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);



    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(keyL)) {
            this.scene.start("playScene");
        }
    }

}

