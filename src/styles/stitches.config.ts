import { createStitches } from '@stitches/react'

export const { styled, css } = createStitches({
  theme: {
    colors: {
      main: '#ff4646',
      black: '#333',
      grey: '#aaa',
      warning: '#f6e58d',
      greyLight: '#fafafa',
      white: '#ffffff',
      greyBorder: '#eeeeee',
      greyMedium: '#f3f3f3',
      redLight: '#ffcaca'
    },
    fontSizes: {
      h1: '26px',
      body3: '12px',
      body2: '14px',
      body1: '16px'
    },
  },
  media: {
    bp1: '(max-width: 420px)',
    bp2: '(max-width: 600px)',
    bp3: '(max-width: 768px)',
    bp4: '(max-width: 992px)',
    bp5: '(max-width: 1024px)',
  }
})
