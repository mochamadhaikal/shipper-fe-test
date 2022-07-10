import { ReactNode, ChangeEvent } from 'react'

import { TextFieldItem, Container } from './style'

interface ITextField {
  placeholder: string
  icon?: ReactNode
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function TextField({ icon = null, ...restProps }: ITextField) {
  return (
    <Container>
      {icon}
      <TextFieldItem data-testid="textfield-component" type="text" hasIcon={!!icon} {...restProps} />
    </Container>
  )
}

export default TextField
