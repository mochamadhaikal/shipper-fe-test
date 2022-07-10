import { keyframes } from '@stitches/react'

import { styled } from '@style'

export const Container = styled('div', {
  position: 'relative',
  display: 'inline-block',
  '& svg': {
    position: 'absolute',
    left: 9,
    top: 11,
    height: 20,
    color: '$main'
  }
})

const animationText = keyframes({
  '0%': { boxShadow: '0 0 0 0 rgba(255,70,70, 0.4)' },
  '70%': { boxShadow: '0 0 0 10px rgba(255,70,70, 0)' },
  '100%': { boxShadow: '0 0 0 0 rgba(255,70,70, 0)' },
});

export const TextFieldItem = styled('input', {
  border: '1px solid $greyBorder',
  appearance: 'none',
  outline: 'none',
  borderRadius: 3,
  boxShadow: 'none',
  backgroundColor: '$white',
  '&:focus': {
    border: '1px solid $main',
    outline: 'none',
    animation: `${animationText} .8s linear`
  },
  variants: {
    hasIcon: {
      true: { padding: '12px 12px 12px 40px' },
      false: { padding: 12 }
    }
  }
})
