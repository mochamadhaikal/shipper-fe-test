import ScrollContainer from 'react-indiana-drag-scroll'

import { styled } from '@style'

export const ContainerDriver = styled(ScrollContainer, {
  marginTop: 30,
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  gap: 16,
  paddingRight: 30,
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column'
  }
})

export const ContainerPagination = styled('div', {
  marginTop: 35,
  display: 'flex',
  justifyContent: 'center',
  gap: 30
})

export const PaginationItem = styled('span', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  variants: {
    isDisabled: {
      true: { color: '$grey' },
      false: { color: '$black' }
    }
  },
  '& svg': {
    margin: '0 6px'
  }
})

export const NotFound = styled('div', {
  backgroundColor: '$redLight',
  padding: '10px 15px',
  border: '1px solid $main',
  marginTop: 30,
  marginRight: 30,
  borderRadius: 6,
  textAlign: 'center'
})
