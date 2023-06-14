import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-textarea',
  styleUrl: 'pds-textarea.css',
  shadow: true,
})
export class PdsTextarea {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
