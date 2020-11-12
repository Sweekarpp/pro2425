class Ball{
    constructor(x,y,r){
        let options = {
            restitution: 0.9
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r = r+r;
        this.image = loadImage("paper.png");
        
    }
    update(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

    }
    fly(){
       
           
       
        
        
    }
    display()
    {
        
        let pos  =this.body.position;
        let angle = this.body.angle;
        push();

            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, 77,77);
        pop();
    }
}