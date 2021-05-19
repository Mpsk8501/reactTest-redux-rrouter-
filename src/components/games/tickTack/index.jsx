import { useState } from 'react'
import ModalComponent from '../../modal'
import classes from './tickTack.module.scss'
import { Button } from 'antd'
import 'antd/dist/antd.css'

const defoultState = Array(9).fill(null)

const winnerLine = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const TickTack = () => {
  const [squareState, setSquareState] = useState(defoultState)
  const [count, setCount] = useState(1)
  const [winnerCount, setWinnerCount] = useState({
    X: 0,
    O: 0,
  })
  const [openModal, setOpenModal] = useState(false)
  const [result, setResult] = useState(null)

  const resetGame = () => {
    setSquareState(defoultState)
    setCount(1)
    setOpenModal(false)
    setResult(null)
  }

  const squareClickHandler = (e) => {
    const index = e.target.getAttribute('data-name')
    const item = count % 2 === 0 ? 'O' : 'X'
    if (!squareState[index]) {
      const newSquareState = [...squareState]
      newSquareState[index] = item
      isWinner(item, newSquareState)
    }
  }

  const isWinner = (item, newSquareState) => {
    let isWin = false
    winnerLine.forEach((line) => {
      if (
        newSquareState[line[0]] === item &&
        newSquareState[line[1]] === item &&
        newSquareState[line[2]] === item
      ) {
        isWin = true
        return
      }
    })
    setSquareState(newSquareState)
    setCount(count + 1)
    if (isWin) {
      setWinnerCount({
        ...winnerCount,
        [item]: winnerCount[item] + 1,
      })
      setResult(`
      Победил ${item}
      `)
      setOpenModal(true)
    }

    if (count > 8 && !isWin) {
      setResult(`Ничья`)
      setOpenModal(true)
      return
    }
  }

  const findShort = (str) => {
    let substrLength = str.length
    let shortSubstr = str

    str.split(' ').forEach((word) => {
      if (word.length < substrLength) {
        shortSubstr = word
        substrLength = word.length
      }
    })

    console.log(shortSubstr, substrLength)
  }

  findShort(
    'Lo ipsum dolor sits amet consectetur adipisicing elit. Corporis dicta, maxime document repudiandae error animi cusss vitae explicabo voluptates harum dolores optio maiores facilis est aliquid fuga quis perferendis natus?'
  )

  return (
    <section className={classes.tickTack}>
      <ModalComponent
        isModalVisible={openModal}
        handleOk={resetGame}
        handleCancel={resetGame}
        data={result}
      />
      <div className="container">
        <h2 className={'h2'}>Tic - tac - toe</h2>
        <p>
          Счет:
          <br />
          X:{winnerCount.X} <br />
          O:{winnerCount.O}
        </p>
        <div className={classes.gameField}>
          {squareState.map((item, index) => {
            const itemClass = item === 'X' ? classes.xrest : null
            return (
              <div
                key={index}
                data-name={index}
                onClick={squareClickHandler}
                className={classes.square}
              >
                <span className={itemClass}>{item}</span>
              </div>
            )
          })}
        </div>
        <Button onClick={resetGame} type="primary">
          Рестарт
        </Button>
      </div>
    </section>
  )
}

export default TickTack
