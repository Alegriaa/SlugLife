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
        
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyL)) {

            this.tweens.add({
                targets: this.sea,
                alphaTopLeft: { value: 0, duration: 5000, ease: 'Power1' },
                alphaTopRight: { value: 0, duration: 5000, ease: 'Power1' },
                alphaBottomRight: { value: 0, duration: 5000, ease: 'Power1' },
                alphaBottomLeft: { value: 0, duration: 5000, ease: 'Power1'},//,delay: 5000 },
     
                yoyo: false,
                //loop: -1   
            }); 
            
         this.scene.start('playScene');   
        
    }
}
}