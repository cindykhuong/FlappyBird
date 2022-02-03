/****************************************************
 * reindeer.js
 * 
 * Our predefined variables:
 * 
 *  - speed     we will animate the reindeer to move so it will have a speed.
 *  - x         the reindeer's x-axis position.
 *  - y         the reindeer's y-axis position.
 *  - width     the reindeer's width.
 *  - height    the reindeer's height.
 *  - gravity   the reindeer will have a gravity for "falling" animation.
 *  - lift      the reindeer will have a lift for "jumping" animation.
 * 
 * Our predefined methods:
 * 
 *  - show()    that we will use for drawing the image.
 *  - update()  that we will use for animation, in this case, creating gravity.
 *  - up()      that we will use for creating jump animation when user press `Space Bar`.
 * 
 ****************************************************/

class Reindeer {
  speed = 0;
  x = 64;
  y = CANVAS_HEIGHT / 2;
  height = 60 ;
  width = this.height * (3/4);
  gravity = 0.2;
  lift = -7;


  /****************************************************
   * Show the reindeer by using the image() from p5,
   * which takes img, x, y and size
   * @custom
   ****************************************************/
  show() {
    image(reindeerImg, this.x, this.y, this.width, this.height);
  }


  /****************************************************
   * Create gravity
   * @custom
   ****************************************************/
  update() {
    //we add gravity to the reindeer's speed, then add that speed to the reindeer's
    //y position to create accelerated falling reindeer.
    this.speed += this.gravity; //this.speed mean the speed in this same file
    this.y += this.speed;


    //checking the reindeer's position relative to the canvas height. Stays in the frame
    if (this.y > CANVAS_HEIGHT - this.height) { // if the reindeer is at the bottom of the canvas
      //let it stay there and set the speed to 0
      this.y = CANVAS_HEIGHT - this.height;
      this.speed = 0;  
    }
    if (this.y < 0) { // if the reindeer is at the top of the canvas, do the same
      this.y = 0;
      this.speed = 0;
    }
  }


  /****************************************************
   * Make the reindeer go upwards
   * @custom
   ****************************************************/
  up() {
    this.speed += this.lift; //add a lift force to the reindeer's speed to make it jumo
  }
}
