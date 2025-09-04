import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CTAButton } from '../CTAButton'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('CTAButton', () => {
  test('renders with correct text and link', () => {
    renderWithRouter(
      <CTAButton to="/demo" variant="primary" size="large">
        Try Demo
      </CTAButton>
    )
    
    const button = screen.getByRole('link', { name: /try demo/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/demo')
  })

  test('applies correct variant styles', () => {
    renderWithRouter(
      <CTAButton to="/test" variant="secondary" size="medium">
        Test Button
      </CTAButton>
    )
    
    const button = screen.getByRole('link', { name: /test button/i })
    expect(button).toBeInTheDocument()
  })

  test('applies correct size styles', () => {
    renderWithRouter(
      <CTAButton to="/test" variant="primary" size="small">
        Small Button
      </CTAButton>
    )
    
    const button = screen.getByRole('link', { name: /small button/i })
    expect(button).toBeInTheDocument()
  })
})
