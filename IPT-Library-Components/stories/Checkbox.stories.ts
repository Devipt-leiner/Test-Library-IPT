import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import Checkbox from '../projects/design-system/src/lib/components/checkbox/checkbox.component';
import { EventEmitter } from '@angular/core';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  decorators: [
    moduleMetadata({
      declarations: [Checkbox],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<Checkbox> = (args: Checkbox) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  formControl: undefined,
  checkboxOption: false,
};
