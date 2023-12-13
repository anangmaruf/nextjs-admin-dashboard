import { Meta, StoryObj } from '@storybook/react';
import Sidebar, { ISidebarProps } from './Sidebar.component';
import { mockSidebarProps } from './Sidebar.mocks';

const meta = {
  title: 'components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Sidebar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockSidebarProps.base,
  } as ISidebarProps,
};
