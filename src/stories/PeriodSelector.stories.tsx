import React from 'react';
import { PeriodSelector } from '..';
import { IPeriodSelectorProps } from '../components/PeriodSelector';

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PeriodSelector',
  component: PeriodSelector,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args: IPeriodSelectorProps) => <PeriodSelector {...args} />;

//๐ Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'PeriodSelector',
};
