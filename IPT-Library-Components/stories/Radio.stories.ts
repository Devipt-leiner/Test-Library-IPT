import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import Radio from '../projects/design-system/src/lib/components/radio/radio.component';
import { EventEmitter } from '@angular/core';

export default {
  title: 'Example/Radio',
  component: Radio,
  decorators: [
    moduleMetadata({
      declarations: [Radio],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<Radio> = (args: Radio) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  formControl: undefined,
};
