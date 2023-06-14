import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-input',
  styleUrl: 'pds-input.css',
  shadow: true,
})
export class PdsInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
