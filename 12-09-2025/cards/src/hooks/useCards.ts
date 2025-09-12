import { useEffect, useState } from 'react'

const BASE_API_ENDPOINT = 'https://deckofcardsapi.com'
const DRAW_CARD_ENDPOINT = '/api/deck/new/draw/?count=1'

interface CardImagesType {
  svg: string;
  png: string;
}

export interface CardType {
  code: string;
  image: string;
  images: CardImagesType;
  value: string;
  suit: string;
}

interface DrawCardsResponseType {
  deck_id: string;
  cards: CardType[];
  remaining: number;
}

export default function useCards() {
  const [card, setCard] = useState<CardType>({} as CardType)
  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const x = () => {
    console.log('X X X X X X X X')
    setCard({"code": "0C", "image": "https://deckofcardsapi.com/static/img/0C.png", "images": {"svg": "https://deckofcardsapi.com/static/img/0C.svg", "png": "https://deckofcardsapi.com/static/img/0C.png"}, "value": "10", "suit": "CLUBS"})
  }


  const fetchDrawCards = async () => {
    setIsLoading(true)
    try {
      console.log('fetchDrawCards')
      const response = await fetch(`${BASE_API_ENDPOINT}${DRAW_CARD_ENDPOINT}`)

      if (!response.ok) {
        throw new Error('Error while drawing a card')
      }

      const data: DrawCardsResponseType = await response.json()
      console.log('fetchDrawCards data', data)

      if (data.cards.length <= 0){
        throw new Error('No cards left in the deck')
      }

      console.log('fetchDrawCards updating state with ', data.cards[0])
      setCard({...data.cards[0]})
    } catch (error) {
      console.error(error)
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDrawCards()
  }, [])

  return {
    card,
    hasError,
    isLoading,
    fetchDrawCards,
    x,
  }
}