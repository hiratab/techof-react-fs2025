import { useState, useEffect } from 'react'

function WindowResizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      console.log('resize')
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h2>Window Resize Tracker</h2>
      <p>
        Width: {windowSize.width}
      </p>
      <p>
        Height: {windowSize.height}
      </p>
    </div>
  )
}

export default WindowResizeTracker