class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }


    create() {
        let playConfig = {
            fontFamily: 'Impact', // changed the font
            fontSize: '28px',

            color: '#00FF00',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0

        }
        this.add.text(centerX, centerY, 'SLUG LIFE PLAY SCENE', playConfig).setOrigin(0.5);
    }

}