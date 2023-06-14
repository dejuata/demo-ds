import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-card',
  styleUrl: 'pds-card.css',
  shadow: true,
})
export class PdsCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
