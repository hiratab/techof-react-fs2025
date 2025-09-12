import useHighCard from './hooks/useHighCard'

function App() {
  const {
    winner,
    player1,
    player2,
    playRound,
    isLoading,
    hasError,
  } = useHighCard()

  if (hasError) {
    return (
      <div>
        <p>Error</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading.....</p>
      </div>
    )
  }
  
  return (
    <>
      <button
        onClick={playRound}
        disabled={isLoading}
      >
        Play Round
      </button>
      <h2>Player 1</h2>
      {
        player1.card && (
          <div>
            <img src={player1.card.image} alt={player1.card.code} />
            <p>{player1.card.value} of {player1.card.suit}</p>
          </div>
        )
      }
      <h2>Player 2</h2>
      {
        player2.card && (
          <div>
            <img src={player2.card.image} alt={player2.card.code} />
            <p>{player2.card.value} of {player2.card.suit}</p>
          </div>
        )
      }

      {winner && <h1>The Winner is {winner}!!!</h1>}
    </>
  )
}

export default App
