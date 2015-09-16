describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("Prince", "X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the player's mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.xCoord).to.equal(1);
  });
  it("returns the player's mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.yCoord).to.equal(2);
  });
  it("lets a player mark a space", function() {
    var testPlayer = new Player("Prince", "X")
    var testSpace = new Space(1,2);
    testSpace.markBy(testPlayer);
    expect(testSpace.player).to.equal(testPlayer);
  });
});

describe('Board', function() {
  it('creates 9 spaces when it is intialized', function() {
    var testBoard = new Board();
    expect(testBoard).to.equal(testBoard);
  });
});

describe('Game', function() {
  it('initializes a game', function() {
    var testPlayer1 = new Player("Prince", "X");
    var testPlayer2 = new Player("Grandma", "O");
    var testGame = new Game(testPlayer1, testPlayer2);
    expect(testGame.player1).to.equal(testPlayer1);
  });

  it('determines the turn', function() {
    var testPlayer1 = new Player("Prince", "X");
    var testPlayer2 = new Player("Grandma", "O");
    var testGame = new Game(testPlayer1, testPlayer2);
    expect(testGame.turn).to.equal(testPlayer1);
  });

  it('changes the turn', function() {
    var testPlayer1 = new Player("Prince", "X");
    var testPlayer2 = new Player("Grandma", "O");
    var testGame = new Game(testPlayer1, testPlayer2);
    testGame.changeTurn();
    expect(testGame.turn).to.equal(testPlayer2);
  });
});
