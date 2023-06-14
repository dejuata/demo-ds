import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-tooltip',
  styleUrl: 'pds-tooltip.css',
  shadow: true,
})
export class PdsTooltip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
