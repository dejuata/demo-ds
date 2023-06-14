import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-toast',
  styleUrl: 'pds-toast.css',
  shadow: true,
})
export class PdsToast {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
