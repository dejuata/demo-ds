import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-filter',
  styleUrl: 'pds-filter.css',
  shadow: true,
})
export class PdsFilter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
