import { styled } from '@style'

export const Container = styled('div', {
  height: 64,
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '16px 30px',
  '@bp3': {
    justifyContent: 'space-between'
  }
})

export const ContainerLeft = styled('div', {
  display: 'none',
  '@bp3': {
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }
})

export const ContainerRight = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12
})

export const Profile = styled('div', {
  '@bp2': {
    display: 'none'
  }
})
