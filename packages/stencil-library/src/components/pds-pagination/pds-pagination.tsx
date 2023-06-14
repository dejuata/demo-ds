import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-pagination',
  styleUrl: 'pds-pagination.css',
  shadow: true,
})
export class PdsPagination {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
