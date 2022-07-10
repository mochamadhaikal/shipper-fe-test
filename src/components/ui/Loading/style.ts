import { keyframes } from '@stitches/react'

import { styled } from '@style'

const spinAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)'},
  '100%': { transform: 'rotate(360deg)'}
});

export const Loader = styled('div', {
  border: '5px solid $greyMedium',
  borderRadius: '50%',
  borderTop: '5px solid $main',
  width: 40,
  height: 40,
  animation: `${spinAnimation} 1s linear infinite`,
  margin: '20px auto'
})
