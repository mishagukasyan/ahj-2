describe("Unit tests for goblin functions", () => {
  let cells;

  beforeEach(() => {
    cells = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];
  });

  test("getCell returns a random cell", () => {
    const index = Math.floor(Math.random() * cells.length);
    expect(getCell()).toEqual(cells[index]);
  });

  test("movieGoblin moves the goblin to a new cell", () => {
    const newCell = getCell();
    movieGoblin();
    expect(newCell).not.toEqual(currentCell);
  });
});