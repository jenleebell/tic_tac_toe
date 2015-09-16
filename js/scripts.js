function Player(name, mark) {
  this.name = name;
  this.mark = mark;
  this.spaces = []
  this.xCoords = []
  this.yCoords = []
}

function Space(xCoord, yCoord) {
  this.xCoord = xCoord;
  this.yCoord = yCoord;
}

Space.prototype.markBy = function(player) {
  if (this.player === undefined) {
    this.player = player;
    player.spaces.push(this)
    player.xCoords.push(this.xCoord)
    player.yCoords.push(this.yCoord)
  }
}

function Board() {
  var space11 = new Space (1,1);
  var space21 = new Space (2,1);
  var space31 = new Space (3,1);
  var space12 = new Space (1,2);
  var space22 = new Space (2,2);
  var space32 = new Space (3,2);
  var space13 = new Space (1,3);
  var space23 = new Space (2,3);
  var space33 = new Space (3,3);
  this.space11 = space11
  this.space21 = space21
  this.space31 = space31
  this.space12 = space12
  this.space22 = space22
  this.space32 = space32
  this.space13 = space13
  this.space23 = space23
  this.space33 = space33
  var spaces = [space11,space21,space31,space12,space22,space32,space13,space23,space33];
  this.spaces = spaces;
}

function Game(player1, player2) {
  this.player1 = player1
  this.player2 = player2
  var board = new Board()
  this.board = board
  this.turn = player1
}


Game.prototype.changeTurn = function() {
  if (this.turn = this.player1) {
    this.turn = this.player2
  }
  else {
    this.turn = this.player1
  }
}

Game.prototype.winner = function() {
  var xChecker1 = this.player1.xCoords.toString().split(",").join("");
  var xChecker2 = this.player2.xCoords.toString().split(",").join("");
  var yChecker1 = this.player1.yCoords.toString().split(",").join("");
  var yChecker2 = this.player2.yCoords.toString().split(",").join("");
  var spaceChecker1 = this.player1.spaces
  var spaceChecker2 = this.player2.spaces
  var allSpaces = spaceChecker1.concat(spaceChecker2)

  if ((/1{3}|2{3}|3{3}/).exec(xChecker1) >= 3) {
    return this.player1;
  } else if ((/1{3}|2{3}|3{3}/).exec(xChecker2) >= 3) {
    return this.player2;
  } else if ((/1{3}|2{3}|3{3}/).exec(yChecker1) >= 3) {
    return this.player1;
  } else if ((/1{3}|2{3}|3{3}/).exec(yChecker2) >= 3) {
    return this.player2;
  } else if ((spaceChecker1.indexOf(this.board.space11) !== -1) && (spaceChecker1.indexOf(this.board.space22) !== -1) && (spaceChecker1.indexOf(this.board.space33) !== -1)) {
    return this.player1;
  } else if ((spaceChecker2.indexOf(this.board.space11) !== -1) && (spaceChecker2.indexOf(this.board.space22) !== -1) && (spaceChecker2.indexOf(this.board.space33) !== -1)) {
    return this.player2;
  } else if ((spaceChecker1.indexOf(this.board.space13) !== -1) && (spaceChecker1.indexOf(this.board.space22) !== -1) && (spaceChecker1.indexOf(this.board.space31) !== -1)) {
    return this.player1;
  } else if ((spaceChecker2.indexOf(this.board.space13) !== -1) && (spaceChecker2.indexOf(this.board.space22) !== -1) && (spaceChecker2.indexOf(this.board.space31) !== -1)) {
    return this.player2;
  } else if (allSpaces.length === 9) {
    return false
  } else {
    return null;
  }
}
