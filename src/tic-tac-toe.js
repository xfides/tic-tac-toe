class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = "x";
    this.arrTicTac = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];

    this.mapWin = [
      //  стобцы
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      //  строки
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      //  диагонали
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ]

  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.arrTicTac[rowIndex][columnIndex] == null) {
      this.arrTicTac[rowIndex][columnIndex] = this.currentPlayerSymbol;
    } else {
      return
    }

    if (this.currentPlayerSymbol == "x") {
      this.currentPlayerSymbol = "o"
    } else {
      this.currentPlayerSymbol = "x"
    }
  }

  isFinished() {
    if (Boolean(this.getWinner()) || this.noMoreTurns()) {
      return true
    }
    return false
  }

  getWinner() {

    let tMap = this.arrTicTac;
    for (let i = 0; i < this.mapWin.length; i++) {
      let oneTestWin = this.mapWin[i];
      let first = oneTestWin[0];
      let second = oneTestWin[1];
      let third = oneTestWin[2];

      if (
          tMap[first[0]][first[1]] == tMap[second[0]][second[1]] &&
          tMap[first[0]][first[1]] == tMap[third[0]][third[1]] &&
          tMap[first[0]][first[1]] !== null
      ) {
        return tMap[first[0]][first[1]]
      }
    }
    return null

  }

  noMoreTurns() {

    for (let i = 0; i < this.arrTicTac.length; i++) {
      for (let j = 0; j < this.arrTicTac[i].length; j++) {
        if (this.arrTicTac[i][j] == null) {
          return false
        }
      }
    }
    return true
  }

  isDraw() {

    if (this.getWinner() !== null) {
      return false
    }
    for (let i = 0; i < this.arrTicTac.length; i++) {
      for (let j = 0; j < this.arrTicTac[i].length; j++) {
        if (this.arrTicTac[i][j] == null) {
          return false
        }
      }
    }

    return true

  }

  getFieldValue(rowIndex, colIndex) {
    return this.arrTicTac[rowIndex][colIndex]
  }
}

module.exports = TicTacToe;
