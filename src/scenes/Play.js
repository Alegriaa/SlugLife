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

        this.power = 0;
        this.add.text(centerX, centerY - textSpacer * 4, 'SLUG LIFE PLAY SCENE', playConfig).setOrigin(0.5);

        cursors = this.input.keyboard.createCursorKeys();

        this.virus = this.physics.add.sprite(centerX, 0, 'virus');
        this.virus.setGravityY(60);
        this.virus.setCollideWorldBounds(true);
        this.virus.setBounce(0.1);
        this.virus.setMaxVelocity(0, 100);
        this.virus.isDestroyed = false;
        this.virus.canJump = false;

        this.ground = this.physics.add.sprite(centerX, this.game.config.height * .95, 'ground');
        this.ground.displayWidth = this.game.config.width * 1.1;
        //this.ground.setCollideWorldBounds(true);

        this.ground.setImmovable();

        this.physics.add.collider(this.virus, this.ground);

    }


    update() {

        if (!this.virus.isDestroyed) {

            if (!cursors.up.isDown && this.virus.body.touching.down) {
                this.virus.canJump = true;

            }
            if (cursors.up.isDown && this.virus.canJump && this.virus.body.touching.down) {

                this.virus.setVelocityY(-100);
            }
        }
    }


}
let textSpacer = 64;


