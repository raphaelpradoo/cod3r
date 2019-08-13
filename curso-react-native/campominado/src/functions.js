// Criar o tabuleiro
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                nearMines: 0
            }
        })
    })
}

// Espalhar as minas
const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlant = 0

    while(minesPlant < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlant++
        }
    }
}

// Criar tabuleiro com as minas plantadas
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

// Pegar os vizinhos
const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]
    rows.forEach(r => {
        columns.forEach(c => {
            const diferent = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >=0 && c < board[0].length

            if (diferent && validRow && validColumn) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

// Vizinhanca segura
const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

// Abrir o campo
const openField = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

// Transforma a matriz do tabuleiro em array normal, para facilitar as buscas
const fields = board => [].concat(...board)

// Se tiver alguma explosao, o jogo acabou
const hadExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0

const pendding = field => (field.mined && !field.flagged)
    || (!field.mined && field.opened)

// Ganhou o jogo
const wonGame = board => fields(board).filter(pendding).length === 0

// Mostrar todas as minas 
const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true)

// Marcar a bandeira no campo.
// Se nao tiver macardo, marca. Se estiver marcado, desmarca
const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}

// Quantas flags foram marcadas no tabuleiro
const flagsUsed = board => fields(board)
    .filter(field => field.flagged).length

export { 
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed 
}