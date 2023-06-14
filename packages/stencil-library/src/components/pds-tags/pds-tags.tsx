import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-tags',
  styleUrl: 'pds-tags.css',
  shadow: true,
})
export class PdsTags {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
