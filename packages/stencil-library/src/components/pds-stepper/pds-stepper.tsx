import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-stepper',
  styleUrl: 'pds-stepper.css',
  shadow: true,
})
export class PdsStepper {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
