import { styled } from '@style'

export const Typography = styled('p', {
  variants: {
    size: {
      body1: { fontSize: '$body1' },
      body2: { fontSize: '$body2' },
      body3: { fontSize: '$body3' }
    },
    isBlock: {
      true: { display: 'block' },
      false: { display: 'inline-block' }
    },
    color: {
      main: { color: '$main' },
      black: { color: '$black' },
      grey: { color: '$grey' }
    },
    isBold: {
      true: { fontWeight: 'bold' },
      false: { fontWeight: 'normal'  }
    }
  },
  defaultVariants: {
    size: 'body2',
    isBlock: true,
    isBold: false
  }
})

export const H1 = styled('h1', {
  fontSize: 26,
  textTransform: 'uppercase',
  '@bp4': {
    fontSize: 22
  },
  variants: {
    color: {
      main: { color: '$main' },
      black: { color: '$black' },
      grey: { color: '$grey' }
    }
  },
  defaultVariants: {
    color: 'main'
  }
})
