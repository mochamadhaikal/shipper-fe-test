import { styled } from '@style'

export const Container = styled('div',{
  width: 300,
  backgroundColor: '$white',
  borderRadius: 10,
  overflow: 'hidden',
  flex: '0 0 auto',
  cursor: 'all-scroll',
  '@media (max-width: 600px)': {
    width: '100%'
  },
  '&:hover > div:first-child': {
    backgroundColor: '$main',
    '& svg': {
      color: '$white'
    },
    '& p': {
      color: '$white'
    }
  },
  '&:hover h4': {
    color: '$white',
    '& span': {
      color: '$white'
    }
  }
})

export const Head = styled('div', {
  padding: 16,
  borderBottom: '1px solid #eee',
  display: 'flex',
  justifyContent: 'space-between',
  '& svg': {
    color: '$grey'
  }
})

export const DriverIDContainer = styled('div', {
  display: 'flex',
  gap: 8
})

export const Content = styled('div', {
  padding: 24,
  '& img': {
    borderRadius: 80
  },
  '@bp2': {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
    '& span': {
      height: '100px !important',
      width: '100px !important'
    }
  }
})

export const ContainerDesc = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  marginTop: 24,
  '@bp2': {
    marginTop: 0,
    '& > div:nth-child(3), & > div:nth-child(4)': {
      display: 'none'
    }
  }
})
