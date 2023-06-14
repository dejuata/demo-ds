import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-radio',
  styleUrl: 'pds-radio.css',
  shadow: true,
})
export class PdsRadio {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
