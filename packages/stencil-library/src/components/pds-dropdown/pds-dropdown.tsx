import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-dropdown',
  styleUrl: 'pds-dropdown.css',
  shadow: true,
})
export class PdsDropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
