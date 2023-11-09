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

  board: Board;
  currentPlayer: Player = Player.X; 

  constructor() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]; 
  }

  move(row: number, col: number): boolean {
    if (this.board[row][col] === null) {
      this.board[row][col] = this.currentPlayer;
      return true;
    }
    return false;
  }

  checkWinner(): Player | null {
    const lines: BoardCoordinates[] = [
      // Rows
      [0, 0], [0, 1], [0, 2],
      [1, 0], [1, 1], [1, 2],
      [2, 0], [2, 1], [2, 2],
      // Columns
      [0, 0], [1, 0], [2, 0],
      [0, 1], [1, 1], [2, 1],
      [0, 2], [1, 2], [2, 2],
      // Diagonals
      [0, 0], [1, 1], [2, 2],
      [0, 2], [1, 1], [2, 0]
    ];

    for (let i = 0; i < lines.length; i += 3) {
      const [a, b, c] = [lines[i], lines[i + 1], lines[i + 2]];
      if (this.board[a[0]][a[1]] && this.board[a[0]][a[1]] === this.board[b[0]][b[1]] && this.board[a[0]][a[1]] === this.board[c[0]][c[1]]) {
        return this.board[a[0]][a[1]];
      }
    }

    return null;

  }

  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
  }
  
  isBoardFull(): boolean {
    return this.board.every(row => row.every(cell => cell !== null));
  }

  public startGame(): void {
   
    document.querySelectorAll('.cell').forEach(cell => {
      cell.addEventListener('click', (event) => {
       
        const clickedCell = event.target as HTMLElement;
        const cellIndex = parseInt(clickedCell.dataset.cellIndex!, 10);

        const row = Math.floor(cellIndex / 3);
        const col = cellIndex % 3;

        if (this.move(row, col)) {
          clickedCell.textContent = this.currentPlayer;
          const winner = this.checkWinner();
          if (winner) {
            alert(`Player ${winner} wins!`);
            this.resetGame();
          } else if (this.isBoardFull()) {
            alert("It's a draw!");
            this.resetGame();
          } else {
            this.switchPlayer();
          }
        }
      });
    });
  }

  private resetGame(): void {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.currentPlayer = Player.X;
    document.querySelectorAll('.cell').forEach(cell => {
      cell.textContent = '';
    });
  }
  
}

const game = new TicTacToe();
game.startGame();

