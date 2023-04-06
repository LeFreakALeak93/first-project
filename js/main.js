const game = new Game()

function preload() {
  game.preload()
}

function setup() {
  createCanvas(1000, 600)
}

function draw() {
  game.draw()

  // Move the player
  // if(keyIsDown(32)) {
  //   game.shots.push(new Shot(game.player))
  // }
  if(keyIsDown(LEFT_ARROW)) {
      game.player.moveLeft()
  }

  if(keyIsDown(RIGHT_ARROW)) {
      game.player.moveRight()
  }

  if(keyIsDown(UP_ARROW)) {
      game.player.moveUp()
  }

  if(keyIsDown(DOWN_ARROW)) {
      game.player.moveDown()
  }
}


