class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {

        this.load.image('menu', './assets/menu.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('menubackground', './assets/menuBackground.png');

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
            this.tweens.add({
                targets: this.sea,
                alphaTopLeft: { value: 0, duration: 5000, ease: 'Power1' },
                alphaTopRight: { value: 0, duration: 5000, ease: 'Power1' },
                alphaBottomRight: { value: 0, duration: 5000, ease: 'Power1' },
                alphaBottomLeft: { value: 0, duration: 5000, ease: 'Power1'},//,delay: 5000 },
     
                yoyo: false,
                //loop: -1
              
            }); 
            this.scene.start("playScene");   
             
            this.groundClock = this.time.delayedCall(5500, () => { //delay call to spawn extra ground

                      
            }, null, this); 
            
        }
    }

}

