import useCards from './hooks/useCards'

interface CardProps {
  imageUrl: string;
}
function Card(props: CardProps) {
  console.log('Card props.imageUrl', props.imageUrl)
  return (
    <div>
      <img src={props.imageUrl} />
    </div>
  )
}

interface DrawCardButtonProps {
  fetchDrawCards: any,
  isLoading: boolean,
}
function DrawCardButton(props: DrawCardButtonProps) {
  return (
    <button
      onClick={props.fetchDrawCards}
      disabled={props.isLoading}
    >
      Draw a card
    </button>
  )
}


function App() {
  const {
    card,
    hasError,
    isLoading,
    fetchDrawCards
  } = useCards()
  console.log('App isLoading', isLoading, 'card', card)

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
        <p>Loading....</p>
      </div>
    )
  }

  return (
    <div>
      <Card imageUrl={card.image} />
      <DrawCardButton
        fetchDrawCards={fetchDrawCards}
        isLoading={isLoading}
      />
    </div>
  )
}

export default App
