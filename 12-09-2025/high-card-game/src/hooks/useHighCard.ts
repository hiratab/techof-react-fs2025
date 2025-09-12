import { useState, useEffect } from 'react'

const BASE_PATH = 'https://deckofcardsapi.com'
const CREATE_DECK_ENDPOINT = '/api/deck/new/shuffle/?deck_count=1'
const DRAW_CARD_ENDPOINT = '/api/deck/$DECK_ID/draw/?count=$CARD_COUNT'

interface CreateDeckResponse {
  deck_id: string;
  remaining: number;
  shuffled: boolean;
}

interface CardType {
  code: string;
  image: string;
  value: string;
  suit: string;
}

interface DrawCardResponse {
  success: boolean;
  deck_id: string;
  cards: CardType[];
  remaining: number;
}

interface Player {
  card: CardType,
  value: number
}

function getCardValue(value: string) {
  switch (value) {
    case 'ACE':
      return 14
    case 'KING':
      return 13
    case 'QUEEN':
      return 12
    case 'JACK':
      return 11
    default:
      return parseInt(value, 10)
  }

}

function useHighCard() {
  const [deckId, setDeckId] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const [player1, setPlayer1] = useState<Player>({} as Player)
  const [player2, setPlayer2] = useState<Player>({} as Player)
  const [winner, setWinner] = useState<'Player 1' | 'Player 2' | 'Tie' | ''>('')

  const initDeck = async () => {
    const response = await fetch(`${BASE_PATH}${CREATE_DECK_ENDPOINT}`)

    if (!response.ok) {
      throw new Error('Failed to create a new deck')
    }

    const createDeckResponse: CreateDeckResponse = await response.json()
    setDeckId(createDeckResponse.deck_id)
  }

  useEffect(() => {
    initDeck()
  }, [])

  const drawCards = async () => {
    if (!deckId) {
      await initDeck()
    }

    const drawCardEndpoint = DRAW_CARD_ENDPOINT.replaceAll('$DECK_ID', deckId).replaceAll('$CARD_COUNT', '2')
    const response = await fetch(`${BASE_PATH}${drawCardEndpoint}`)

    if (!response.ok) {
      throw new Error('Failed while drawing cards')
    }

    const data: DrawCardResponse = await response.json()
    const [cardPlayer1, cardPlayer2]: CardType[] = data.cards

    return [
      {
        card: cardPlayer1,
        value: getCardValue(cardPlayer1.value),
      },
      {
        card: cardPlayer2,
        value: getCardValue(cardPlayer2.value)
      }
    ]
  }

  const playRound = async () => {
    try {
      setIsLoading(true)

      const [cardPlayer1, cardPlayer2] = await drawCards()
      setPlayer1(cardPlayer1)
      setPlayer2(cardPlayer2)

      if (cardPlayer1.value > cardPlayer2.value) {
        setWinner('Player 1')
      } else if (cardPlayer2.value > cardPlayer1.value) {
        setWinner('Player 2')
      } else {
        setWinner('Tie')
      }

    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    winner,
    player1,
    player2,
    playRound,
    isLoading,
    hasError,
  }
}

export default useHighCard