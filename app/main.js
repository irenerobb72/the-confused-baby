'use strict'
const R = require('ramda')

const createEmptyBoard = () => {
  let arr = new Array(8)
  for(let i = 0; i < 8; i++) {
    arr[i] = new Array(8)
  }
  return arr
}

var board = ChessBoard('board')
var board = ChessBoard('board', 'start')

const makeMove = (color, piece) => {

}

const illegalMove = (color, piece) => {

}

module.exports = {

}

var pieces = {
  NONE : {name: "None", code: ""}
  WHITE_KING : {name: "White King", code: "&#9812;"}
  WHITE_QUEEN : {name: "White Queen", code: "&#9813;"}
  WHITE_ROOK : {name: "White Rook", code: "&#9814;"}
  WHITE_BISHOP: {name: "White Bishop", code: "&#9815;"}
  WHITE_KNIGHT : {name: "White Knight", code: "&#9816;"}
  WHITE_PAWN : {name: "White Pawn", code: "&#9817;"}
  BLACK_KING : {name: "Black King", code: "&#9818;"}
  BLACK_QUEEN : {name: "Black Queen", code: "&#9819;"}
  BLACK_ROOK : {name: "Black Rook", code: "&#9820;"}
  BLACK_BISHOP : {name: "Black Bishop", code: "&#9821;"}
  BLACK_KNIGHT : {name: "Black Knight", code: "&#9822;"}
  BLACK_PAWN : {name: "Black Pawn", code: "&#9823;"}

}