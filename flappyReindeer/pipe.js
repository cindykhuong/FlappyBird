/****************************************************
 * pipe.js
 *
 * Our predefined variables:
 * 
 *   - speed         contains the pipe speed that we will use for moving animation.
 *   - width         the width of the pipe.
 *   - x             x-axis position of pipe.
 *   - topY          the upper pipe's y-axis positioning.
 *   - bottomY       the lower pipe's y-axis positioning.
 *   - topHeight     the upper pipe's height.
 *   - bottomHeight  the lower pipe's height.
 * 
 * Our predefined methods:
 * 
 *   - show()        will be used for drawing an upper and lower pipe.
 *   - update()      will be used for animation, in this case, moving the pipes from right to left on the canvas.
 *   - hits()        will be used for checking if our reindeer hits a pipe.
 *   - pass()        will be used for checking if our reindeer passes (NOT hits) a pipe.
 *   - offscreen()   will be used for checking of the pipe has moved outside the canvas.
 * 
 ****************************************************/

class Pipe {
  speed = 2;
  topHeight = random(CANVAS_HEIGHT / 2);
  width = 20;
  x = CANVAS_WIDTH;
  topY = 0;
  bottomHeight = random(CANVAS_HEIGHT / 2);
  bottomY = CANVAS_HEIGHT - this.bottomHeight;

  /****************************************************
   * Create pipes
   * Use fill and rect from p5 together with
   * the variables in the top
   * @custom
   ****************************************************/
  show() {
    ////fill() method to define which color to use
    fill(121, 85, 72); 

    //add two rectangles by using p5.js rect() method
    rect(this.x, 0, this.width, this.topHeight);
    rect(this.x, this.bottomY, this.width, this.bottomHeight);
  }

  /****************************************************
   * Each pipe starts to the right of the canvas and
   * moves to the left
   * This function updates in draw()
   * @custom
   ****************************************************/
  update() {
    //Add movement to the pipes by subtracting the pipe's speed from the pipes x position.
    this.x -= this.speed;
  }

  /****************************************************
   * Hit detection: when the reindeer hits the pipe
   * @custom
   ****************************************************/
  hits(reindeer) {

    // checking if the reindeer's x and y position is inside the x and y position for a pipe.
    //we check if the reindeer is overlapping with this set of pipes, and return the result.
    if (reindeer.y < this.topHeight || reindeer.y + reindeer.height > CANVAS_HEIGHT - this.bottomHeight) {
      if (reindeer.x + reindeer.width > this.x && reindeer.x < this.x + this.width) {
        return true;
      }
    }
    return false;
  }

  /****************************************************
   * When the reindeer passes a pipe
   * @custom
   ****************************************************/
  pass(reindeer) {
    if (reindeer.x > this.x && !this.passed) {
      this.passed = true;
      return true;
    }
    return false;
  }

  /****************************************************
   * Check if the pipe is offscreen or not
   * Use the variables in the top
   * @custom
   ****************************************************/
  offscreen() {

  }
}
