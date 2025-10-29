// handles flow of the game


export class YatzyGame {
  constructor() {
    this.currentPlayer = "Player 1";
    this.currentRound = 1;
    this.totalScore = 0;
  
  }

  startNewGame() {
    console.log("Starting new game...");
  }

  endTurn() {
    console.log("Ending turn...");
  }

  endGame() {
    console.log("Game over. Showing results...");
  }
}