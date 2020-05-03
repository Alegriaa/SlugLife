class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }
/*

Platforms do not have physics hooked up yet but they ARE all in a ground named platformGroup and groundGroup

*/
    preload(){

        // Maria, should we move these to preload in Menu, so they are ready in play scene.?
        //Brian, this is Nicole, it had an issue before when you load on menu sometimes, we need to have them in play.js
        //for the final game I think all of the assets should be loaded into preload Menu - Maria


        this.load.image('platform', './assets/platform.png');//placeholder image 
        this.load.image('platform1', './assets/platform1.png');//placeholder image 
        this.load.image('platform2', './assets/platform2.png');//placeholder image 
        this.load.image('platform3', './assets/platform3.png');//placeholder image 
        this.load.image('background1', './assets/background.png');//placeholder image 
        this.load.image('backgroundFront', './assets/backgroundFront.png');//placeholder image 
        this.load.spritesheet('blueAnimation', './assets/blue animation.png',{frameWidth: 25, frameHeight: 50, startFrame: 0, endFrame:4});
        this.load.spritesheet('redAnimation', './assets/redanimation.png', {frameWidth: 25, frameHeight: 50, startFrame: 0, endFrame: 4});
        

        this.load.spritesheet('virusAnimation', './assets/virus roll.png', { frameWidth: 50, frameHeight: 50, startFrame: 0, endFrame: 4 });
        this.load.spritesheet('slugAnimation','./assets/SlugSprite.png', { frameWidth: 80, frameHeight: 50, startFrame: 0, endFrame: 4 });

    }
    create() {
        let playConfig = {
            fontFamily: 'Impact', // changed the font
            fontSize: '28px',

            color: '#B202FF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0


        }

        this.add.text(centerX, centerY - textSpacer * 4, 'SLUG LIFE PLAY SCENE 2', playConfig).setOrigin(0.5);

        this.gameSpeed = game.settings.smallSpeed;
        this.playerScore = 0;

        // some modifiers for virus

        this.ACCELERATION = 1500;
        this.MAX_X_VEL = 500;   // pixels/second
        this.MAX_Y_VEL = 5000;
        this.DRAG = 600;    // DRAG < ACCELERATION = icy slide
        this.MAX_JUMPS = 1; // change for double/triple/etc. jumps 🤾‍

        this.JUMP_VELOCITY = -700;
        
        
       

        this.spawnPowerupBool = false;
        this.spawnBluePowerupBool = false;
        cursors = this.input.keyboard.createCursorKeys();

        this.background1 = this.add.tileSprite(0,0, 960, 640,'background1').setOrigin(0,0);
        this.backgroundFront = this.add.tileSprite(0,0, 960, 640,'backgroundFront').setOrigin(0,0);
        
        this.virus = new Virus(this, centerX, 0, 'virus');

      // this.virus.body.gravity.y = 2600;
        //this.virus.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);
        //this.virus.setCollideWorldBounds(true);
        


        cursors = this.input.keyboard.createCursorKeys(); // we create keys to be used

        this.background1 = this.add.tileSprite(0,0, 960, 640,'background1').setOrigin(0,0);
        this.backgroundFront = this.add.tileSprite(0,0, 960, 640,'backgroundFront').setOrigin(0,0);
        this.add.text(centerX, centerY - textSpacer * 4, 'SLUG LIFE PLAY SCENE 2', playConfig).setOrigin(0.5);
        this.highway = this.add.tileSprite(0,0, 960, 640,'highway').setOrigin(0,0);
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#B202FF',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(69, 54, this.playerScore, scoreConfig);
        
        this.slug = new Slug(this, 900, 570, 'slugAnimation',0); // created new slug object in play.js

        //animation for slug
        this.anims.create({
           key:'slug',
           repeat: -1,
           frames: this.anims.generateFrameNumbers('slugAnimation', {start: 0, end: 4, first: 0}),
           frameRate: 10
       });

   
         
      

       this.slug.anims.play('slug'); 


        this.virus = new Virus(this, centerX, 0, 'virusAnimation', 0); // we create a virus instance within play.js
        
        //animation for virus object
        this.anims.create({
            key: 'virus',
            repeat: -1,
            frames: this.anims.generateFrameNumbers('virusAnimation', {start: 0, end: 4, first: 0}),
            frameRate: 20
        });

        this.virus.anims.play('virus');
    


        //platforms spawn on the top half of the screen and the ground objects spawn on the bottom half
        this.platformGroup = this.add.group({
            runChildUpdate: true    // make sure update runs on group children
        });
        
        this.groundGroup = this.add.group({
            runChildUpdate: true    // make sure update runs on group children
        });


        this.powerupGroup = this.add.group({
            runChildUpdate: true
        })

  



        
        this.platformClock = this.time.delayedCall(700, () => { //delay call to spawn second platform
            this.addPlatform();
         }, null, this);
         this.groundClock = this.time.delayedCall(2500, () => { //delay call to spawn extra ground
         }, null, this); 
         
        this.ground1 = this.physics.add.sprite(100, 500, 'platform').setScale(7, 1).setOrigin(0, 0);//spawn starting platform
        
       
       

        this.addGround();



      

        this.tempMovement = -400;



        this.physics.add.collider(this.virus, this.ground)




        this.ground1.setImmovable();

     

        this.physics.add.collider(this.virus, this.ground1);
        this.physics.add.collider(this.virus, this.ground);
        this.physics.add.collider(this.virus, this.platformGroup);
        this.physics.add.collider(this.virus, this.groundGroup);
        this.physics.add.collider(this.virus, this.powerupGroup);
        
        
          this.powerUptest = this.physics.add.sprite (-5, centerY, 'redAnimation',0).setOrigin(0.5);
          //this.powerupGroup.add(this.powerupTest);
         this.powerUpBlue = this.physics.add.sprite (-5, centerY,'blueAnimation',0).setOrigin(0.5);
         this.powerUptest.setImmovable();
         this.powerUpBlue.setImmovable();
         
         //Red bottle animation
         this.anims.create({
            key: 'explode',
            repeat: -1,
            frames: this.anims.generateFrameNumbers('redAnimation', { start: 0, end: 4, first: 0}),
            frameRate: 30
        });

        this.powerUptest.anims.play('explode');
      
        // Blue bottle animation
        this.anims.create({
            key:'blueExplode',
            repeat: -1,
            frames: this.anims.generateFrameNumbers('blueAnimation',{start: 0, end: 4, first: 0}),
            frameRate: 30
        });

        this.powerUpBlue.anims.play('blueExplode');
        
       // var bubble = this.animations.add('red');
       // this.powerUptest.animations.play('bubble', 10, true);
       this.physics.add.collider(this.virus, this.powerUptest, (a,b)=>{
        
        this.gameSpeed += 0.2;
        this.respawnPowerup();
        console.log(this.gameSpeed);
        this.playerScore += 1;
        console.log(this.playerScore);

    }, null, this);


    this.physics.add.collider(this.virus, this.powerUpBlue, (a,b)=>{
        
        this.gameSpeed += 0.5;
        this.respawnBluePowerup();
        this.playerScore += 2;
        

    }, null, this);

        }
    

        
addPlatform() {

    this.skinDesider = Math.floor(Math.random() * 3) + 1; //picks a random number between 1-3, uses this number to pick a skin for the platform
    this.heightDesider =  (Math.floor(Math.random() * 300) + 100);//picks a random number between 100-300 for the height
    
    // create new platforms according to the height and skin parameters
    if(this.skinDesider == 1){
        this.platform =  new Platform(this, 1200, this.heightDesider, 'platform', 0,-500);
        
        
        
    } else if (this.skinDesider == 2){

        this.platform =  new Platform(this, 1200, this.heightDesider, 'platform1', 0, -500); 
    } else {
        this.platform =  new Platform(this, 1200, this.heightDesider, 'platform2', 0,-500);
    }
    if(this.spawnBluePowerupBool){

        this.powerUpBlue.x = 1200;
        this.powerUpBlue.y = this.heightDesider-30;
        this.spawnBluePowerupBool = false;
    }
    this.platformGroup.add(this.platform); // add it to existing group
    
}

addGround() {

    this.skinDesider1 = (Math.floor(Math.random() * 3) + 1);//picks a random number between 1-3, uses this number to pick a skin for the ground
    this.heightDesider1 =  (Math.floor(Math.random() * 150) + 1) +400  ;//picks a random number between 400-550 for the height. idk why i had to code it like this it wasnt working the normal way

    // create new barrier according to the height and skin parameters
    if(this.skinDesider1 == 1){
        this.ground =  new Ground(this, 1200, this.heightDesider1, 'platform', 0);
        //this.powerupAdd = new Powerup(this, 1200, this.heightDesider1-30, 'redbottle',0);
        
      
    } else if (this.skinDesider1 == 2){

        this.ground =  new Ground(this, 1200, this.heightDesider1, 'platform1', 0); 
    } else {
        this.ground =  new Ground(this, 1200, this.heightDesider1, 'platform2', 0);

    }
    if(this.spawnPowerupBool){

        this.powerUptest.x = 1200;
        this.powerUptest.y = this.heightDesider1-30;
        this.spawnPowerupBool = false;
    }
   
    this.groundGroup.add(this.ground);  // add it to existing group
    
}


    update() {

        if (this.gameSpeed > 20){
        }

        this.scoreLeft.text = this.playerScore;

        this.powerUptest.x -= this.gameSpeed;
        this.powerUpBlue.x -= this.gameSpeed;
        if(this.powerUptest.x<-10){
            this.respawnPowerup();
            this.spawnPowerupBool = true;
        } 
        if(this.powerUpBlue.x <-10){
            this.spawnBluePowerupBool = true;
        } 

        this.highway.tilePositionX += 2;
        this.background1.tilePositionX += 0.2;
        this.backgroundFront.tilePositionX += 0.5;
        this.ground1.x-= 6;

        // we check if the virus has been destroyed 

        if (!this.virus.isDestroyed) {
            // making sure the player is touching the ground
            if(this.virus.body.touching.down) {
                this.jumps = this.MAX_JUMPS;
                this.jumping = false;
            } 
            
            // creates more jumps
            if (this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150)) {
                this.virus.body.velocity.y = this.JUMP_VELOCITY;
                this.virus.jumping = true;

            }
            // resets jumps
            if(this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up)) {
                this.jumps--;
                this.jumping = false;
            }
        }
        
        if(this.virus.body.y > 640){
            this.background1.tilePositionY -= 0.5;
            this.backgroundFront.tilePositionY -= 0.5;
            this.background1.tilePositionX += 1;
            this.backgroundFront.tilePositionX += 1;
            this.ground1.y -= 1;
            this.ground1.x -= 1;
            
              
            this.time.delayedCall(100, () => { this.scene.start('endScene'); });
          
       

        }
       
    }


    respawnPowerup(){
        
        this.powerUptest.x = -7;
        
    }

    setGameSpeed(speed){

        this.gameSpeed += speed;
        
    }

        


    getMovementSpeed(){
        return 200;

    }
    respawnBluePowerup(){
        this.powerUpBlue.x = -7;
    }




}

let textSpacer = 64;


