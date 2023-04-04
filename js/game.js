class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.enemy = new Enemy();
    this.shot = new Shot(this.player);
    this.playerImage;
    this.enemyImage;
    this.shotImage;
    this.shotEnemyImage;
    this.obstacles = [];
    this.enemies = [];
    this.shots = [];
    this.score = 0;
  }

  preload() {
    this.background.backgroundImage = loadImage("./assets/background.jpg");
    this.playerImage = loadImage("./assets/x-wing.png");
    this.enemyImage = loadImage("./assets/tie-fighter.png");
    this.shotImage = loadImage("./assets/shot.png");
    this.shotEnemyImage = loadImage("./assets/shot1.png");
    let myAudio = document.querySelector('#audio')
    myAudio.play()

  }

  // checkWinningCondition() {
  //   if (this.player.score >= 500) {
  //     fill("yellow");
  //     textSize(30);
  //     text("You won!", 260, 300);
  //     noLoop();
  //   }
  // }

  draw() {
    this.background.draw();
    this.player.draw();
    this.enemy.draw();
    this.collision();

    // Draw shots fired by player
    if (this.shots.length != 0) {
      this.shots.forEach((shot) => {
        shot.draw(game.player);
        shot.update();
      });
    }

    // Every x frames we want to push a new enemy into the array
    if (frameCount % 90 === 0) {
      this.enemies.push(new Enemy(this.enemyImage));
    }

    // Every x frames we want to push a new shot into the array
    if (frameCount % 90 === 0) {
      this.shots.push(new Shot(this.shotImage));
    }

    // Every x frames we want to push a new enemyShot into the array
    // if (frameCount % 90 === 0) {
    //   this.shots.push(new Shot(this.shotEnemyImage));
    // }

    // Draw the enemies
    this.enemies.forEach((enemy) => {
      enemy.draw();
    });

    // this.obstacles = this.obstacles.filter((obstacle) => {
    //   if (obstacle.collision(this.player) || obstacle.x < -obstacle.width) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });

    //   this.checkWinningCondition();
  }

  // collision() {
  //   // Check for collision with enemy
  //    this.enemies.forEach(enemy => {
  //     if(this.player.x + this.player.width > enemy.x &&
  //       this.player.y + this.player.height > enemy.y &&
  //       this.player.x < enemy.x &&
  //       this.player.y < enemy.y + enemy.height)
  //       {
  //         console.log("Spaceship hit!")
  //       }

  //    })
  // }

      collision() {
      // check collision between player and enemy
      this.enemies.forEach(enemy => {
              if (this.player.x + this.player.width > enemy.x && this.player.x < enemy.x + enemy.width
                && this.player.y + this.player.height > enemy.randomY && this.player.y < enemy.randomY + enemy.height) {
        noLoop()
        alert("Gameover")
      } else {
        return false
      }
      })
      // check collision between shot and enemy
        for(let i = 0; i < this.shots.length; i++) {
          for(let j = 0; i < this.enemies.length; j++) {
            if (this.shot.x + this.shot.width > this.enemy.x && this.shot.x < this.enemy.x + this.enemy.width
              && this.shot.y + this.shot.height > this.enemy.randomY && this.shot.y < this.enemy.randomY + this.enemy.height) {
                this.shots.splice(i, 1)
                this.enemies.splice(j, 1)
                this.score += 100;
                document.querySelector("span").innerHTML = this.score;
              }
              else {
                return false;
              }
          }
        }
    }
  }

