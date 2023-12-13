import { IBPrimaryProps } from './BPrimary.component';

const base: IBPrimaryProps = {
  id: 'text',
  label: 'Button Primary',
  onClick: () => alert('Button Primary'),
  className: 'btn-primary',
  type: 'button',
};

export const mockBPrimaryProps = {
  base,
};
