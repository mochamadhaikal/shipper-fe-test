import { render } from '@testing-library/react'
import Text from '@components/ui/Text'

describe('Text', () => {
  it('renders a Text', () => {
    const { getByTestId } = render(<Text>Haikal Kamil</Text>)

    const component = getByTestId('typography-component')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Haikal Kamil')
  })
  it('renders a H1', () => {
    const { getByTestId } = render(<Text as="h1">Haikal Kamil</Text>)

    const component = getByTestId('h1-component')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Haikal Kamil')
  })
})
