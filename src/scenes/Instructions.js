class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionsScene");
    }

    preload(){

        this.load.image('menubackground1', './assets/menuBackground.png');

    }
    create(){
        
        this.starfield = this.add.tileSprite(0, 0, 960, 640, 'menubackground1').setOrigin(0, 0);

       // this.add.text(centerX, centerY, 'you dead', endConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY - 64, "it's 2021", endConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY + 128, "Press Up Button to Restart", endConfig).setOrigin(0.5);
        cursors = this.input.keyboard.createCursorKeys();
        
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
         this.scene.start('playScene');   
        
    }
}
}