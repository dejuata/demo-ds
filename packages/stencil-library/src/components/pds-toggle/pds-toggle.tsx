import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-toggle',
  styleUrl: 'pds-toggle.css',
  shadow: true,
})
export class PdsToggle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
