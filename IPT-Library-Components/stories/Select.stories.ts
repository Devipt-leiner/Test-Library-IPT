import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import Select from '../projects/design-system/src/lib/components/select/select.component';

export default {
  title: 'Example/Select',
  component: Select,
  decorators: [
    moduleMetadata({
      declarations: [Select],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<Select> = (args: Select) => ({
  props: args,
});

export const Large = Template.bind({});
const exampleData: any[] = [
  { code: 1, name: 'Opcion 1' },
  { code: 2, name: 'Opcion 2' },
  { code: 3, name: 'Opcion 3' },
]
Large.args = {
  isRequired: true,
  data: exampleData,
  defaultText: 'Select',
  control: undefined,
  boxShadow: 0
};

export const Small = Template.bind({});
Small.args = {
  isRequired: true,
  data: exampleData,
  defaultText: 'Select',
  control: undefined,
  boxShadow: 0
};
