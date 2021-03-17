class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':5,
          'density':1.0
      }
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, options);
      
      World.add(world, this.body);
    }
    display(){
      var rubberpos =this.body.position;
      push();
      translate(rubberpos.x, rubberpos.y);
      rectMode(CENTER);
      
      
      strokeWeight(4);
      stroke("black");
      fill("blue");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };