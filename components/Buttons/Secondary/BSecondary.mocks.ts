import { IBSecondaryProps } from './BSecondary.component';

const base: IBSecondaryProps = {
  id: 'text',
  label: 'Button Secondary',
  onClick: () => alert('Button Secondary'),
  className: 'btn-secondary',
  type: 'button',
};

export const mockBSecondaryProps = {
  base,
};
