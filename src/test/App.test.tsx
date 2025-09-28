import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(document.body).toBeTruthy()
  })

  it('displays dashboard by default', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    // Check for dashboard content
    expect(screen.getByText(/welcome back/i)).toBeTruthy()
  })
})
