import * as Checkbox from '@radix-ui/react-checkbox';
import { styled } from 'stitches.config';

export const Root = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: 'transparent',
  width: '2rem',
  height: '2rem',
  borderRadius: '$default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $gray700',
  cursor: 'pointer',

  '&:hover': { borderColor: '$gray400',  },
  '&:focus': { borderColor: '$gray400' },

  '&[data-state="checked"]': {
    background: '$valid',
    borderColor: '$valid',
    '&:hover': { borderColor: '$gray400',  },
    '&:focus': { borderColor: '$gray400' },
  },
});

export const Indicator = styled(Checkbox.Indicator, {
  color: '$primary',
});

export const Label = styled('label', {
  color: 'white',
  fontSize: '$sm',
  lineHeight: 1,
});
