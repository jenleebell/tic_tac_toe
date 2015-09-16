function Player(name, mark) {
  this.name = name;
  this.mark = mark;
}

function Space(xCoord, yCoord) {
  this.xCoord = xCoord;
  this.yCoord = yCoord;
}

Space.prototype.markBy = function(player) {
  this.player = player;
}

function Board() {
  var space11 = new Space (1,1);
  var space21 = new Space (2,1);
  var space31 = new Space (3,1);
  var space12 = new Space (1,2);
  var space22 = new Space (2,2);
  var space32 = new Space (3,2);
  var space31 = new Space (1,3);
  var space23 = new Space (2,3);
  var space33 = new Space (3,3);
  var spaces = [space11,space21,space31,space12,space22,space32,space31,space32,space33];
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
