import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import AsideButton from '../projects/design-system/src/lib/components/aside-button/aside-button.component';
import { EventEmitter } from '@angular/core';

export default {
  title: 'Example/AsideButton',
  component: AsideButton,
  decorators: [
    moduleMetadata({
      declarations: [AsideButton],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<AsideButton> = (args: AsideButton) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
  text: 'Home',
  type: '0',
  url: 'https://www.flaticon.es/',
  buttonActive: false,
  textColor: 'black',
  isClicked: new EventEmitter<any>()
};
