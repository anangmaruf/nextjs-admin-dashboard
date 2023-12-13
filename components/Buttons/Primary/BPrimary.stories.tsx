import { Meta, StoryObj } from '@storybook/react';
import BPrimary, { IBPrimaryProps } from './BPrimary.component';
import { mockBPrimaryProps } from './BPrimary.mocks';

const meta = {
  title: 'components/Button/Primary',
  component: BPrimary,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BPrimary>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockBPrimaryProps.base,
  } as IBPrimaryProps,
};
