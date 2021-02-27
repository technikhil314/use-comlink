import { useEffect, useState } from 'react'

interface Props {
  url: string
  data: any
}

type State = {
  isProcessing: boolean
  data: any
}

export const useWorker = ({ url, data }: Props): State => {
  const [state, setState] = useState<State>({
    isProcessing: true,
    data: null
  })
  let worker: Worker
  useEffect(() => {
    worker = new Worker(url)
    worker.postMessage('message', data)
    worker.onmessage = (e) => {
      setState({
        isProcessing: false,
        data: e.data
      })
    }
    return () => {
      worker.terminate()
    }
  }, [])
  return state
}
