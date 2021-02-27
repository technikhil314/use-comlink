import React from 'react'
import useWorker from 'use-webworker'

const App = () => {
  const { isProcessing, data } = useWorker({
    url: '/worker.js',
    data: null
  })
  if (isProcessing) {
    return <h1 data-testid='loading'>Loading...</h1>
  }
  return <h1 data-testid='message'>{data}</h1>
}

export default App
