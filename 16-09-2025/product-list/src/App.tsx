import { useState } from 'react'

import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Slider,
} from '@mui/material';

const PRODUCTS = [
  {
    id: 1,
    name: "Headphones",
    price: 50
  },
  {
    id: 2,
    name: "Keyboard",
    price: 120
  },
  {
    id: 3,
    name: "Mouse",
    price: 30
  },
  {
    id: 4,
    name: "Monitor",
    price: 500
  },
  {
    id: 5,
    name: "Webcam",
    price: 90
  }
]

function App() {
  const [range, setRange] = useState<number>(0)
  const [filtered, setFiltered] = useState(PRODUCTS)

  const handleRangeChange = (_: Event, newValue: number) => {
    setRange(newValue)
  }

  const applyFilter = () => {
    setFiltered(
      PRODUCTS.filter(product => product.price <= range)
    )
  }

  return (
    <Box
      sx={{
        mx: 5,
        my: 5
      }}
    >
      <Typography
        variant='h3'
        gutterBottom
      >
        Filter by Price
      </Typography>

      <Slider 
        value={range}
        onChange={handleRangeChange}
        valueLabelDisplay='auto'
        min={0}
        max={500}
        step={10}
      />

      <Button
        variant='contained'
        fullWidth={true}
        onClick={applyFilter}
        sx={{
          mt: 2
        }}
      >
        Apply Filter
      </Button>


      <Box
        sx={{
          mt: 2,
          display: 'grid',
          gap: 2
        }}
      >
        {
          filtered.map((product) => {
            return (
              <Card key={product.id} variant='outlined'>
                <CardContent>
                  <Typography
                    variant='subtitle1'
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant='body1'
                  >
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default App
