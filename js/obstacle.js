// class Obstacle {
//     constructor(image) {
//       this.image = image
//       this.x = 600
//       this.y = random(400)
//       this.width = 50
//       this.height = 50
//     }
  
//     draw() {
//       image(this.image, this.x, this.y, this.width, this.height)
  
//     }
  
    // collision(playerInfo) {
    //   // Get the middle of the obstacle
    //   let obstacleX = this.x + this.width / 2
    //   let obstacleY = this.y + this.height / 2
  
    //   // Get the middle of the player
    //   let playerX = playerInfo.x + playerInfo.width / 2
    //   let playerY = playerInfo.y + playerInfo.height / 2
  
    //   // dist(x1, y1, x2, y2) returns the distance between the objects
    //   if (dist(playerX, playerY, obstacleX, obstacleY) > 50) {
    //     return false
    //   } else {
    //     playerInfo.score += 100
    //     document.querySelector("span").innerText = playerInfo.score
    //     return true
    //   }
    // }
  // }