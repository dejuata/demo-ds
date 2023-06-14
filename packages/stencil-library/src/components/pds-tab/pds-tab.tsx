import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-tab',
  styleUrl: 'pds-tab.css',
  shadow: true,
})
export class PdsTab {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
