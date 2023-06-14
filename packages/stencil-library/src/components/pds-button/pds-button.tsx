import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-button',
  styleUrl: 'pds-button.css',
  shadow: true,
})
export class PdsButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
