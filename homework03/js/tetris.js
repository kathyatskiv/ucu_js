function Tetris(state = GAME_STATES.PAUSED) {
  // Private properties
  const playground = PlaygroundFactory.getInstance();
  let gameInverval = null; // TODO: will need to use this for gameover and pause events

  // public properties
  this.figures = []; // TODO: seems to not be accesable outside

  // Private methods
  const addFigure = () => {
    const newFigure = new Figure(this.figures);
    this.figures.push(newFigure);
    return newFigure;
  };

  const getCurrentFigure = () =>
    this.figures.find(figure => figure.state === STATES.FALLING) || addFigure();

  const events = (teris, keyCode) => { // TODO: this seems to have refactoring potential
    const eventsMap = {
      [DOWN]() {
        if(tetris.state != GAME_STATES.PAUSED)
          getCurrentFigure().move(DOWN);
      },
      [RIGHT]() {
        if(tetris.state != GAME_STATES.PAUSED)
          getCurrentFigure().move(RIGHT);
      },
      [LEFT]() {
        if(tetris.state != GAME_STATES.PAUSED)
          getCurrentFigure().move(LEFT);
      },
      [PAUSE]() {

        // DONE: Paused
        
        if(tetris.state == GAME_STATES.PLAYING){
          console.log('event PAUSE')

          clearInterval(gameInverval)
          tetris.state = GAME_STATES.PAUSED
        } 
        else{
          console.log('event RESUME')

          tetris.play()
        }

      },
    }

    eventsMap[keyCode] && eventsMap[keyCode]();
  };

  const destroyLine = () => {
    // TODO
  };

  const checkForGameOver = () => {
    // TODO
  };

  // public methods
  this.play = () => {
    this.state = GAME_STATES.PLAYING; // TODO:

    playground.render();
    document.addEventListener('keydown', ({keyCode}) =>  events(this, keyCode));

    gameInverval = setInterval(() => { // TODO: maybe it's better to have a separate method for this?
      getCurrentFigure().move(DOWN);
      destroyLine(); // TODO: not sure where this method shoud be. Maybe in moveDown?
      checkForGameOver(); // TODO
    }, INTERVAL);

  };
}

const tetris = new Tetris();
tetris.play()
