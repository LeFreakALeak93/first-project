class Player {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = 0;
    this.y = 0;
    this.velocity = 2
  }

  draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    if (this.x > 900) {
    this.x = 895;
    }
    this.x += 10;
  }

  moveLeft() {
    if (this.x < 0) {
      this.x = 5;
    }
    this.x -= 10;
  }

  moveUp() {
    if (this.y < 0) {
      this.y = 0
    }
    this.y -= 10;
  }

  moveDown() {
    if (this.y > 500) {
      this.y = 500
    }
    this.y += 10;
  }
}

class Enemy {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.velocity = 2;
    this.x = 1100;
    this.shotX = this.x 
    this.enemyShot = this.x;
    this.randomY = Math.floor(1 + (Math.random() * 9)) * 100;

    switch(difficulty){
      case "easy":
        this.velocity = 2
        break;
      case "medium":
        this.velocity = 5
        break;
      case "hard":
        this.velocity = 10
        break;
    }
  }

  draw() {
    image(game.enemyImage, this.x, this.randomY, this.width, this.height)
    this.x -= this.velocity;

    if (this.x <= 900)
    image(game.shotEnemyImage, this.shotX + (this.width / 2),  this.randomY, this.width, this.height)
    this.shotX -= 3.5
    if(difficulty === "easy") {
      this.shotX -= 2
    }
    else if(difficulty === "medium") {
      this.shotX -= 5
    }
    else if(difficulty === "hard") {
      this.shotX -= 10
    }
  }
  
}

class Shot {
  constructor(player) {
    this.width = 50;
    this.height = 25;
    this.x = player.x + player.width
    this.y = player.y + (player.height / 2) - 12
    this.velocity = 2
  }

  draw() {
      image(game.shotImage, this.x, this.y, this.width, this.height)
      
    }

  update() {
    this.x += 5;
  }

  collisionWithShot(enemyInfo){
    // get the middle of shot
    let shotX = this.x + (this.width / 2)
    let shotY = this.y + (this.height / 2)
    // get the middle of enemy
    let enemyX = enemyInfo.x + (enemyInfo.width / 2)
    let enemyY = enemyInfo.randomY + (enemyInfo.height / 2)
    let distance = dist(shotX, shotY, enemyX, enemyY)
    if(distance <= 100){
      console.log(distance)
      return true
    }
    return false
  }

  // switch(difficulty){
  //   case "easy":
  //     this.speed = Math.random() * 2.801 + 1
  //     break;
  //   case "medium":
  //     this.speed = Math.random() * 2.801 + 2
  //     break;
  //   case "hard":
  //     this.speed = Math.random() * 3.001 + 3
  //     break;
  //   case "impossible":
  //     this.speed = Math.random() * 3.001 + 4
  //     break;
  // }
}


