import { Typography, H1 } from './style'

interface IText {
  children: string
  size?: 'body1' | 'body2' | 'body3'
  isBlock?: boolean
  color?: 'main' | 'black' | 'grey'
  as?: 'h1' | 'p'
  isBold?: boolean
}

function Text({ children, as, ...restProps }: IText) {

  if(as === 'h1') {
    return (
      <H1 data-testid="h1-component" {...restProps}>
        {children}
      </H1>
    )
  }

  return (
    <Typography data-testid="typography-component" {...restProps}>
      {children}
    </Typography>
  )
}

export default Text
