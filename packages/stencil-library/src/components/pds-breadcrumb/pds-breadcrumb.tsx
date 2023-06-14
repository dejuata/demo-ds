import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-breadcrumb',
  styleUrl: 'pds-breadcrumb.css',
  shadow: true,
})
export class PdsBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
