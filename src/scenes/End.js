class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }


    create(){
        let endConfig = {
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

        

        this.add.text(centerX, centerY, 'you dead', endConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - 64, "it's 2021", endConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 128, "Press Up Button to Restart", endConfig).setOrigin(0.5);
        cursors = this.input.keyboard.createCursorKeys();
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
            this.scene.start('playScene');
        
    }
}
}