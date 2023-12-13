import { Meta, StoryObj } from '@storybook/react';
import BSecondary, { IBSecondaryProps } from './BSecondary.component';
import { mockBSecondaryProps } from './BSecondary.mocks';

const meta = {
  title: 'components/Button/Secondary',
  component: BSecondary,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BSecondary>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockBSecondaryProps.base,
  } as IBSecondaryProps,
};
