import { render, fireEvent } from '@testing-library/react'
import TextField from '@components/ui/TextField'

const props = {
  onChange: jest.fn()
}

describe('TextField', () => {
  it('renders a TextField', () => {
    const { getByTestId } = render(<TextField placeholder="nama" {...props} />)

    const component: any = getByTestId('textfield-component')

    expect(component).toBeInTheDocument()
    fireEvent.change(component, {target: {value: '23'}})
    expect(component.value).toBe('23')
  })
})
