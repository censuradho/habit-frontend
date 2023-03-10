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
    cursor: 'not-allowed',
    background: '$gray400'
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
        '> *': {
          color: '$background',
          fontWeight: 600

        }
      },
      confirm: {
        background: '$valid',
        padding: '0.7rem 1rem',
        '> *': {
          color: '$heading',
          fontWeight: 600
        },
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
        border: '1px solid white',
        padding: '0.7rem 1rem',
        color: 'white',
        fontWeight: 600,
      
        '&:hover': {
          borderColor: '$primary',
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
})