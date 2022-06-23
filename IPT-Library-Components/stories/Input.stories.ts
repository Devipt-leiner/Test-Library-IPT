import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import Input from '../projects/design-system/src/lib/components/input/input.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

export const Default = Template.bind({});
Default.args = {
  inputType: 'text',
  placeHolder: 'Nombre',
  validateText: 'Debe escribir su nombre',
  control: "exampleForm.controls['example']"
};
