import { render, waitFor, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import App from './App'
it('renders without crashing', async () => {
  await act(async () => (render(<App></App>) as any) as Promise<void>)
  expect(screen.getByTestId('loading')).toBeInTheDocument()
  await waitFor(() => screen.getByTestId('message'))
  expect(screen.getByTestId('message')).toBeInTheDocument()
})
