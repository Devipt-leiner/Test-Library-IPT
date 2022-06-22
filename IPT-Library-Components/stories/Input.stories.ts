import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import Button from '../projects/design-system/src/lib/components/button/button.component';
import Input from '../projects/design-system/src/lib/components/input/input.component';
import { FormBuilder } from '@angular/forms';

export default {
  title: 'Example/Input',
  component: Input,
  decorators: [
    moduleMetadata({
      declarations: [Input],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<Input> = (args: Input) => ({
  props: args,
});

export const Large = Template.bind({});
Large.args = {
  inputType: 'date',
  size: 'large',
  placeHolder: 'Escriba...',
  validateText: 'Debe escribir',
  control: undefined
};

export const Small = Template.bind({});
Small.args = {
  inputType: 'date',
  size: 'small',
  placeHolder: 'Escriba...',
  validateText: 'Debe escribir',
  control: undefined
};
