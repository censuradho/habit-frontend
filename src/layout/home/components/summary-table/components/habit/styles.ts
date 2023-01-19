import * as Popover from '@radix-ui/react-popover';
import * as Progress from '@radix-ui/react-progress';

import { styled, keyframes  } from 'stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const Content = styled(Popover.Content, {
  borderRadius: 4,
  padding: 20,
  width: 260,
  backgroundColor: '$foreground',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  zIndex: 100,
});


export const Trigger = styled(Popover.Trigger, {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '$default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$foreground',
  border: '2px solid $foregroundLight',

  variants: {
    disabled: {
      true: {
        opacity: 0.48,
        cursor: 'not-allowed'
      }
    }
  }
})

export const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$foregroundLight',
  borderRadius: '99999px',
  width: '100%',
  height: 25,
  transform: 'translateZ(0)',
});


export const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '$primaryLight',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});
export const Arrow = styled(Popover.Arrow, {
  fill: '$foreground'
})

export const Root = styled(Popover.Root, {
  zIndex: 4,
})

export const {
  Portal
} = Popover