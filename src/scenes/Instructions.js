class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionsScene");
    }

    preload(){

        //this.load.image('menubackground1', './assets/menuBackground.png');

    }
    create(){
        
        this.starfield = this.add.tileSprite(0, 0, 960, 640, 'instruc').setOrigin(0, 0);

      
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        this.sea = this.add.image(960, 640, 'menuBlackout').setScale(2,2).setAlpha(0);
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyL)) {

            this.tweens.add({
                targets: this.sea,
                alphaTopLeft: { value: 1, duration: 3000, ease: 'Power1' },
                alphaTopRight: { value: 1, duration: 3000, ease: 'Power1' },
                alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1' },
                alphaBottomLeft: { value: 1, duration: 3000, ease: 'Power1'},//,delay: 5000 },
     
                yoyo: false,
                //loop: -1   
            }); 
            this.groundClock = this.time.delayedCall(3000, () => { //delay call to spawn extra ground

                this.scene.start('playScene');         
            }, null, this);  
         
        
    }
}
}