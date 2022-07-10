import { fireEvent, render } from '@testing-library/react'
import Header from '@components/section/Layout/Header'

const props = {
  setIsShowSidebar: jest.fn(),
  isShowSidebar: true
}

describe('Header', () => {
  it('renders a Header', () => {
    const { getByTestId } = render(<Header {...props} />)

    const component = getByTestId('header-component')
    const menuExpand = getByTestId('menu-expand')

    expect(component).toBeInTheDocument()
    fireEvent.click(menuExpand)

    expect(props.setIsShowSidebar).toBeCalledTimes(1)
  })
})
