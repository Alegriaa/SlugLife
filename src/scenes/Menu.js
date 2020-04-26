class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('virus', './assets/placeholderPlayer.png');
        this.load.image('ground', './assets/ground.png');

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

        this.add.text(centerX, centerY, 'SLUG LIFE', menuConfig).setOrigin(0.5);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);



    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(keyL)) {
            this.scene.start("playScene");
        }
    }

}

