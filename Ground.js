class Ground {
    constructor(x,y,width,height,color) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.fill = color 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.fill);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };