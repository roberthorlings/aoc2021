import {transpose} from "./util/array.js";

function parseFile(lines) {
    const drawnNumbers = lines[0].split(",").map(v => parseInt(v))
    const boards = []
    for(let firstLine = 2; firstLine <= lines.length; firstLine += 6) {
        boards.push(
            lines.slice(firstLine, firstLine + 5).map(line => line.trim().split(/\s+/).map(v => parseInt(v)))
        )
    }

    return {
        drawnNumbers,
        boards
    }
}

const FINISHED_CELL = "*";

function markBoard(board, number) {
    return board.map(rows => rows.map(cell => cell === number ? FINISHED_CELL : cell))
}

function hasRowsFinished(board) {
    return board.find(row => row.filter(cell => cell !== FINISHED_CELL).length === 0) !== undefined
}

function isBoardFinished(board) {
    return hasRowsFinished(board) || hasRowsFinished(transpose(board))
}

function getBoardScore(finishedBoard) {
    return finishedBoard.flatMap(row => row.filter(c => c !== FINISHED_CELL)).reduce((a, b) => a + b, 0);
}

export function part1(lines) {
    const {drawnNumbers, boards} = parseFile(lines)

    let number
    let currentBoards = boards
    for(number of drawnNumbers) {
        // Update boards
        currentBoards = currentBoards.map(board => markBoard(board, number))

        // Check for finish
        const finishedBoard = currentBoards.find(isBoardFinished)

        if(finishedBoard) {
            return number * getBoardScore(finishedBoard)
        }
    }
}

export function part2(lines) {
    const {drawnNumbers, boards} = parseFile(lines)

    let number
    let currentBoards = boards
    for(number of drawnNumbers) {
        // Update boards
        currentBoards = currentBoards.map(board => markBoard(board, number))

        if(currentBoards.length === 1) {
            if(isBoardFinished(currentBoards[0])) {
                return number * getBoardScore(currentBoards[0])
            }
        } else {
            // Remove any finished boards
            currentBoards = currentBoards.filter(board => !isBoardFinished(board))
        }
    }

    throw Error("No or multiple boards left: " + currentBoards.length);
}

