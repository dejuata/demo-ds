import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-accordion',
  styleUrl: 'pds-accordion.css',
  shadow: true,
})
export class PdsAccordion {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
