import { render } from '@testing-library/react'
import Button from '@components/ui/Button'

describe('Button', () => {
  it('renders a button', () => {
    const { getByTestId } = render(<Button>Submit</Button>)

    const component = getByTestId('button-component')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Submit')
  })
})
