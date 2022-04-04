import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleThumbnail } from '../../components/ArticleThumbnail';

export default {
  title: 'Medium/ArticleThumbnail',
  component: ArticleThumbnail,
  argTypes: {}
} as ComponentMeta<typeof ArticleThumbnail>;

const Template: ComponentStory<typeof ArticleThumbnail> = (args) => <ArticleThumbnail {...args} />;

export const DefaultArticleThumbnailView = Template.bind({});
