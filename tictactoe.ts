enum Player {
  X = 'X',
  O = 'O'
}

type Board = (Player | null)[][];

interface TicTacToeGame {
  board: Board;
  currentPlayer: Player;
  move(row: number, col: number): boolean;
  checkWinner(): Player | null;
  switchPlayer(): void;
  isBoardFull(): boolean;
}

type BoardCoordinates = [number, number];

class TicTacToe implements TicTacToeGame {

  board: Board = [];
  currentPlayer: Player = Player.X;


  //Todo implement missing functionallities.

  move(row: number, col: number): boolean {
    throw new Error("Method not implemented.");
  }
  checkWinner(): Player | null {
    throw new Error("Method not implemented.");
  }
  switchPlayer(): void {
    throw new Error("Method not implemented.");
  }
  isBoardFull(): boolean {
    throw new Error("Method not implemented.");
  }
}