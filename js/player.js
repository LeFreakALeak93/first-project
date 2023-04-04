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
  }

  draw() {
    image(game.enemyImage, this.x, this.randomY, this.width, this.height)
    this.x -= this.velocity;

    if (this.x <= 900)
    image(game.shotEnemyImage, this.shotX + (this.width / 2),  this.randomY, this.width, this.height)
    this.shotX -= 3.5
  }
}

class Shot {
  constructor(playerInfo) {
    this.width = 50;
    this.height = 25;
    this.x = playerInfo.x;
    this.y = playerInfo.y;
    this.velocity = 2
  }

  draw(playerInfo) {
      image(game.shotImage, this.x + playerInfo.width, this.y + (playerInfo.height / 2) - 12, this.width, this.height)
      
    }

  update() {
    this.x += 5;
  }
}


