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
    this.myAudio;
    this.myAudio2;

    const difficulty = localStorage.getItem('difficulty');
        
    // Set the difficulty of the game based on the stored value
    if (difficulty === 'easy') {
      console.log("difficulty: EASY")
    }
    else if (difficulty === 'medium') {
      console.log("difficulty: MEDIUM")
    }
    else if (difficulty === 'hard') {
      console.log("difficulty: HARD")
    }
    else if (difficulty === 'impossible') {
      console.log("difficulty: IMPOSSIBLE")
    }
  }



  preload() {
    this.background.backgroundImage = loadImage("./assets/background.jpg");
    this.playerImage = loadImage("./assets/x-wing.png");
    this.enemyImage = loadImage("./assets/tie-fighter.png");
    this.shotImage = loadImage("./assets/shot.png");
    this.shotEnemyImage = loadImage("./assets/shot1.png");
    // let myAudio = document.querySelector("#audio");
    // myAudio.play();
    this.myAudio = createAudio("./assets/audio/theme-song.mp3")
    this.myAudio.play()
    this.myAudio2 = document.querySelector("#audio2")
  }

  checkWinningCondition() {
    if (this.score >= 1000) {
      fill("yellow");
      textSize(100);
      text("You won!", 260, 300);
      noLoop();
    }
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.enemy.draw();
    this.collision();
    this.checkWinningCondition();

    // Draw shots fired by player
    if (this.shots.length != 0) {
      this.shots.forEach((shot) => {
        shot.draw(this.player);
         
        shot.update();
      });
    }

    if(keyIsDown(32)) {
         game.shots.push(new Shot(game.player))
         this.myAudio2.play();
       }
 

    // Every x frames we want to push a new enemy into the array
    if (frameCount % 90 === 0) {
      this.enemies.push(new Enemy(this.enemyImage));
    }

    // Every x frames we want to push a new shot into the array
    // if (frameCount % 90 === 0) {
    //   this.shots.push(new Shot(this.shotImage));
    // }

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

    // check for collision between shot and enemies
    for (let i = 0; i < this.enemies.length; i++) {
      for(let j = 0; j < this.shots.length; j++) {
              const enemy = this.enemies[i];
      if (this.shots[j].collisionWithShot(enemy)) {
        // increase score by 100
        this.score += 100
        document.querySelector("span").innerHTML = this.score
        // remove shot
        this.shots.splice(j, 1);
        // remove enemy
       this.enemies.splice(i, 1);
        // exit loop, because bullet can only hit one enemy
        break;
      }
      }
    }
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
    // check collision between player and enemy or player and shot
    this.enemies.forEach((enemy) => {
      if (
        this.player.x + this.player.width > enemy.x &&
        this.player.x < enemy.x + enemy.width &&
        this.player.y + this.player.height > enemy.randomY &&
        this.player.y < enemy.randomY + enemy.height 
        ||
        this.player.x > enemy.shotX &&
        this.player.x < enemy.shotX + enemy.width &&
        this.player.y + this.player.height > enemy.randomY &&
        this.player.y < enemy.randomY + enemy.height
      ) {
        fill("red");
        textSize(100);
        text("Game over!", 260, 300);
        3
        
        this.myAudio.pause();
        this.myAudio.currentTime = 0;
        noLoop();
      } else {
        return false;
      }
    });
  }

  // checkForShot() {
  //   // check collision between shot and enemy
  //   for (let i = 0; i < this.shots.length; i++) {
  //     // for (let j = 0; j < this.enemies.length; j++) {
  //       // console.log(this.shots[i])
  //       if (
  //         this.shots[i].x > this.enemy.x &&
  //         this.shots[i].y > this.enemy.randomY &&
  //         this.shots[i].y < this.enemy.randomY + this.enemy.height
  //       ) {
  //         this.shots.splice(i, 1);
  //         this.enemies.splice(j, 1);
  //         console.log("collision!")
  //         this.score += 100;
  //         document.querySelector("span").innerText = this.score;
  //         this.checkWinningCondition();
  //       } else {
  //         return false;
  //       }
  //     }
  //   }


}
