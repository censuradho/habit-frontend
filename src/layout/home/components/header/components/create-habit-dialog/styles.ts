import { styled, keyframes  } from "stitches.config";
import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: '$backgroundOpacity',
  position: 'fixed',
  inset: 0,
  backdropFilter: 'blur(5px)',
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 10
});


export const List = styled('ul', {
  marginTop: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const Content = styled(Dialog.Content, {
  backgroundColor: '$foreground',
  borderRadius: '$default',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '28.125rem',
  maxHeight: '85vh',
  padding: 25,
  zIndex: 10,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
})

export const Form = styled('form', {
  width: '100%',
  margin: '2rem 0'
})


export const {
  Root,
  Close,
  Portal,
  Trigger
} = Dialog