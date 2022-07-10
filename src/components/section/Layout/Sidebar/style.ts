import { styled } from '@style'

export const Container = styled('div', {
  height: '100vh',
  width: '100%',
  maxWidth: '14rem',
  transition: 'all 0.3s ease-out 0s',
  overflow: 'hidden',
  display: 'block',
  variants: {
    isShowSidebar: {
      true: {
        '@bp3': {
          position: 'fixed',
          display: 'block',
          left: 0,
          top: 0,
          backgroundColor: '$white',
          zIndex: 3
        },
      },
      false: {
        '@bp3': {
          display: 'none',
        },
      }
    }
  }
})

export const Overlay = styled('div', {
  display: 'none',
  variants: {
    isShowSidebar: {
      true: {
        '@bp3': {
          display: 'block',
          backgroundColor: 'rgba(0,0,0,0.5)',
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 2
        }
      },
      false: {
        display: 'none',
      }
    }
  }
})

export const ContainerLogo = styled('div', {
  padding: '16px',
  marginBottom: '16px'
})

export const ContainerMenu = styled('div', {
  height: 'auto',
  width: '100%',
  overflowX: 'hidden'
})

export const ContainerMenuItem = styled('div', {
  display: 'flex',
  borderLeft: '6px solid transparent',
  width: '100%',
  minWidth: 200,
  cursor: 'pointer',
  gap: 16,
  alignItems: 'center',
  padding: 16,
  variants: {
    isActive: {
      true: {
        borderLeftColor: '$main',
        color: '$main',
        backgroundColor: '$greyLight'
      },
      false: {
        borderLeftColor: 'transparent',
        '&:hover': {
          borderLeftColor: '$main',
          color: '$main',
          backgroundColor: '$greyLight'
        }
      }
    }
  },
  defaultVariants: {
    isActive: 'false'
  }
})
