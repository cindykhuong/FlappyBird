/****************************************************
 * present.js
 *
 ****************************************************/

class Present {
  y = random(height);
  speed = 2;
  x = width;
  height = 60;
  width = 45;


  /****************************************************
   * Show the present image by using image() from p5, 
   * together with x, y, width and height
   * @custom
   ****************************************************/
  show() {
    image(presentImg, this.x, this.y, this.width, this.height);
  }


  /****************************************************
   * Make the present start outside of the canvas to the right and
   * move to the left. 
   * Use x and speed.
   ****************************************************/
  update() {
    this.x -= this.speed;
  }


  /****************************************************
   * Here you want the reindeer to hit the present
   ****************************************************/
  hits(reindeer) {
    if (this.y < reindeer.y + reindeer.height && this.y + this.height > reindeer.y) {
      if (this.x < reindeer.x + reindeer.width && this.x + this.width > reindeer.x) {
        if (!this.taken) {
          this.taken = true;
          return true;
        }
      }
    }
    return false;
  }
}
