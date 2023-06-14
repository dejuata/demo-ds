import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-tables',
  styleUrl: 'pds-tables.css',
  shadow: true,
})
export class PdsTables {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
