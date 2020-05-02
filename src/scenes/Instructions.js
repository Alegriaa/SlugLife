class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionsScene");
    }

    create(){
        
        this.starfield = this.add.tileSprite(0, 0, 960, 640, 'menuimg').setOrigin(0, 0);

       // this.add.text(centerX, centerY, 'you dead', endConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY - 64, "it's 2021", endConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY + 128, "Press Up Button to Restart", endConfig).setOrigin(0.5);
        cursors = this.input.keyboard.createCursorKeys();
        
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyL)) {
            his.tweens.add({
                targets: this.sea,
                alphaTopLeft: { value: 0, duration: 5000, ease: 'Power1' },
                alphaTopRight: { value: 0, duration: 5000, ease: 'Power1' },
                alphaBottomRight: { value: 0, duration: 5000, ease: 'Power1' },
                alphaBottomLeft: { value: 0, duration: 5000, ease: 'Power1'},//,delay: 5000 },
     
                yoyo: false,
                //loop: -1
              
            }); 
    

         this.groundClock = this.time.delayedCall(5500, () => { //delay call to spawn extra ground
            this.scene.start('playScene');   


                      
         }, null, this); 
        
    }
}
}