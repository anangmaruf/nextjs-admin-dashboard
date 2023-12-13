import { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

const meta = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BaseTemplate>;
export default meta;

// More on component templates: https://storybook.js.org/docs/react/writting-stories/introduction#using-args
type Story = StoryObj<typeof meta>;

// const Template: Story = (args: any) => <BaseTemplate {...args} />;

export const Base: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  } as IBaseTemplate,
};
