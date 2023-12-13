import { Meta, StoryObj } from '@storybook/react';
import Input, { IInputProps } from './Input.component';
import { mockInputProps } from './Input.mocks';

const meta = {
  title: 'components/Fields/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockInputProps.base,
  } as IInputProps,
};
