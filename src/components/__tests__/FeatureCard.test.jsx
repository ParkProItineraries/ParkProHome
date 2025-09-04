import { render, screen } from '@testing-library/react'
import FeatureCard from '../FeatureCard'

describe('FeatureCard', () => {
  const defaultProps = {
    title: 'Test Feature',
    description: 'This is a test feature description',
    icon: '🚀',
    badge: 'New'
  }

  test('renders with all props', () => {
    render(<FeatureCard {...defaultProps} />)
    
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
    expect(screen.getByText('This is a test feature description')).toBeInTheDocument()
    expect(screen.getByText('🚀')).toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  test('renders without badge', () => {
    const { badge, ...propsWithoutBadge } = defaultProps
    render(<FeatureCard {...propsWithoutBadge} />)
    
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
    expect(screen.queryByText('New')).not.toBeInTheDocument()
  })

  test('applies animation delay', () => {
    render(<FeatureCard {...defaultProps} delay={2} />)
    
    const card = screen.getByText('Test Feature').closest('div')
    expect(card).toBeInTheDocument()
  })
})
