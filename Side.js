class Side {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y, this.width,this.height,options);
	    World.add(world, this.body);
        
   }
   display(){
       push();
        var pos2= this.body.position;
        translate(pos2.x,pos2.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
   }

}