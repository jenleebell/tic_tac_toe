describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("Prince", "X");
    expect(testPlayer.mark()).to.equal("X");
  });
});
