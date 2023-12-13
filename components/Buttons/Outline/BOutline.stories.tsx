import { Meta, StoryObj } from '@storybook/react';
import BOutline, { IBOutlineProps } from './BOutline.component';
import { mockBOutlineProps } from './BOutline.mocks';

const meta = {
  title: 'components/Button/Outline',
  component: BOutline,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BOutline>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockBOutlineProps.base,
  } as IBOutlineProps,
};
