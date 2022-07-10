import { styled } from '@style'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 20px',
  backgroundColor: '$white',
  marginRight: 30,
  '@bp3': {
    flexDirection: 'column',
    alignItems: 'start'
  }
})

export const ContainerRight = styled('div', {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  '@bp3': {
    marginTop: 12,
    flexDirection: 'column',
    alignItems: 'start',
    width: '100%',
    '& button, & div, & input': {
      width: '100%'
    }
  }
})

export const ButtonSpan = styled('span', {
  '@bp4': {
    display: 'none'
  },
  '@bp3': {
    display: 'block'
  }
})
