// falling - new figure is put on the playgound
// static - figure stoped moving. This happens when there are obsicles for any cells bellow
function Figure(obsticles, state = STATES.FALLING) {
  // Public properties
  this.cells = [];
  this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
  this.id = helperMethods.idGenerator.next().value;
  this.state = state;
  this.obsticles = obsticles;

  // Private methods
  const validFor = (direction) =>
    this.cells.every(cell => cell.validFor(direction));

  // initialise figure cells
  const addCell = (x, y) =>
    this.cells.push(new Cell(x, y, this.color, this.id, this.obsticles, this.state));

  const generateCoordinates = () =>
    INITIAL_POSITIONS[Math.floor(Math.random() * INITIAL_POSITIONS.length)];

  generateCoordinates().forEach(([y, x]) =>
    addCell(x, y));

  // DONE: move right and move left are almost identical
  this.move = (direction) => {
    if(direction == DOWN && !validFor(direction)) {
      this.state = STATES.STATIC;
    }

    if (!validFor(direction)) return;

    this.cells.forEach(cell => cell.deRender());
    this.cells.forEach(cell => cell.move(direction));
  };

  this.rotate = () => {
    // TODO: this is complicated. But really can be solved with basic math.
    //       make sure you are rotating around the center element
    //       all figures will be eaither 3 cells wide or 3 cells hight
  }
}
