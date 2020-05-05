
class Virus extends Phaser.Physics.Arcade.Sprite{     // use phasers sprite
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);             
        scene.physics.add.existing(this); 

        this.ACCELERATION = 1500;
        this.MAX_X_VEL = 500;  
        this.MAX_Y_VEL = 5000;
        this.DRAG = 600;    
        this.MAX_JUMPS = 1; 
        this.JUMP_VELOCITY = -700;
        this.body.gravity.y = 2600;
        this.isDestroyed = false;
        
        
    }
    create(){
        
    }
   
    update() {


        // we may not need this here & in play.js

        if (!this.isDestroyed) {

            if(this.body.touching.down) {
                this.jumps = this.MAX_JUMPS;
                this.jumping = false;
            } 

            if (this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150)) {
                this.body.velocity.y = this.JUMP_VELOCITY;
                this.jumping = true;

            }
            if(this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up)) {
                this.jumps--;
                this.jumping = false;
            }
        }



        if(this.body.y == 640){
            this.scene.start("endScene")

          
       

        }

    }
}