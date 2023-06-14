import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-checkbox',
  styleUrl: 'pds-checkbox.css',
  shadow: true,
})
export class PdsCheckbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
