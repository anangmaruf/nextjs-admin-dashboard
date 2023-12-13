import { IBOutlineProps } from './BOutline.component';

const base: IBOutlineProps = {
  id: 'text',
  label: 'Button Outline',
  onClick: () => alert('Button Outline'),
  className: 'btn-outline',
  type: 'button',
};

export const mockBOutlineProps = {
  base,
};
