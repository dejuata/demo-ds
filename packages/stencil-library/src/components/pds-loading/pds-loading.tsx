import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-loading',
  styleUrl: 'pds-loading.css',
  shadow: true,
})
export class PdsLoading {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
