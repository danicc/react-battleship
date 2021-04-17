import React from 'react'
import { render, screen, fireEvent } from 'test-utils'
import PickAttempts from './pick-attempts'

const onAttemptsChange = () => undefined
const onSubmit = () => undefined

describe('<PickAttempts/>', () => {
  test('should render custom, easy, medium and hard level inputs', () => {
    render(<PickAttempts onAttemptsChange={onAttemptsChange} onSubmit={onSubmit} />)

    const customInputElement = screen.getByLabelText(/custom/i)
    expect(customInputElement).toBeInTheDocument()

    const easyInputElement = screen.getByLabelText(/easy/i)
    expect(easyInputElement).toBeInTheDocument()

    const mediumInputElement = screen.getByLabelText(/medium/i)
    expect(mediumInputElement).toBeInTheDocument()

    const hardInputElement = screen.getByLabelText(/hard/i)
    expect(hardInputElement).toBeInTheDocument()
  })
  test('should render custom attempts amount input when custom level is selected', async () => {
    render(<PickAttempts onAttemptsChange={onAttemptsChange} onSubmit={onSubmit} />)

    expect(screen.queryByLabelText(/attempts ammount/i)).toBeNull()

    const customInputElement = screen.getByLabelText(/custom/i)
    fireEvent.click(customInputElement, { target: { value: 'custom' } })

    expect(screen.getByLabelText(/attempts ammount/i)).toBeInTheDocument()
  })
})
