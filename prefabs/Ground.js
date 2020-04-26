class Ground extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue) {
        super (scene, x, y, texture, frame);
        scene.add.existing(this);
        this.newBarrier = true;  
    }

create(){
    this.atEnd = false;
}

update(){
        // override physics sprite update()
        super.update();

        // add new barrier when existing barrier hits center X
        this.x -= game.settings.platformSpeed;;
        if(this.newBarrier && this.x < centerX+300) {
            this.newBarrier = false;
            this.scene.addGround();
        }

        // destroy ground object if it reaches the left edge of the screen
        if(this.x < -this.width-1000) { //-1000 so the starting ground platform doesn't despawn early
            this.destroy();
        }
    }

    
}