class Powerup extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, pointValue) {
        super (scene, x, y, texture, frame);
        
        scene.add.existing(this);               // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);       // add physics body
        this.setImmovable();  
        scene.add.existing(this);
         this.setVelocity(-200); 
         this.setGravity(0);
    }

create(){
    this.atEnd = false;
    //this.body.setVelocity(200);
}

update(){
        // override physics sprite update()
        //this.body.x = -4;
        super.update();

        // add new barrier when existing barrier hits center X
       
    }

    
}