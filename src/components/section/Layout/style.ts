import { styled } from '@style'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row'
})

export const ContainerRight = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100% - 230px)'
})

export const ContainerContent = styled('div', {
  backgroundColor: '$greyLight',
  flex: 1,
  padding: 30,
  paddingRight: 0
})
