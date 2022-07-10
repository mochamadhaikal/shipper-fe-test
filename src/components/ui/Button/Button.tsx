import { ReactNode } from 'react'

import { ButtonItem } from './style'

interface IButton {
  children: string | ReactNode
  icon?: ReactNode
}

function Button({ children, icon }: IButton) {
  return (
    <ButtonItem data-testid="button-component">
      {children}
      {icon}
    </ButtonItem>
  )
}

export default Button
