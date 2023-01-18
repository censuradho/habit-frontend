import { styled } from 'stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '.2s',
  justifyContent: 'center',
  position: 'relative',
  whiteSpace: 'nowrap',
  borderRadius: '3px',
  textTransform: 'capitalize',
  
  '&:disabled': {
    cursor: 'not-allowed'
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    variant: {
      primary: {
        background: '$primary',
        padding: '0.7rem 1rem',

        '&:hover': {
          background: '$primaryDark'
        },
        '&:disabled': {
          background: '$disabled'
        },
        '> *': {
          color: '$background',
          fontWeight: 600

        }
      },
      danger: {
        background: '$error',
        padding: '0.7rem 1rem',

        '&:hover': {
          background: '$errorDark'
        },
        '&:disabled': {
          background: '$disabled'
        },
        '> *': {
          color: '$background',
          fontWeight: 600

        }
      },
      stroke: {
        background: 'none',
        border: '1px solid $primary',
        padding: '0.7rem 1rem',
        color: 'white',
        fontWeight: 600,
        svg: {
          path: {
            stroke: 'white'
          }
        },
        '&:hover': {
          borderColor: 'white',
        },
        '> *': {
          color: '$white',
          fontSize: '$xsm'
        }
      },
      letter: {
        background: 'none',
        '> *': {
          color: '$heading'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const LoaderContainer = styled('div', {
  position: 'absolute',

  svg: {
    width: '36px'
  }
})