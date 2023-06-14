import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-search',
  styleUrl: 'pds-search.css',
  shadow: true,
})
export class PdsSearch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
