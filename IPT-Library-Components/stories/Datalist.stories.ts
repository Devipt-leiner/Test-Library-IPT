// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import Datalist from '../projects/design-system/src/lib/components/datalist/datalist.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Datalist',
  component: Datalist,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
  ],
  parameters: {
    layour: 'fullscreen'
  }
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Datalist> = (args: Datalist) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
const exampleData: any[] = [
  { code: 1, name: 'Opcion 1' },
  { code: 2, name: 'Opcion 2' },
  { code: 3, name: 'Opcion 3' },
]
Default.args = {
  datalistData: exampleData,
  datalistId: 'example',
  placeHolder: 'Seleccione',
  validateText: 'Debe seleccionar'
};
