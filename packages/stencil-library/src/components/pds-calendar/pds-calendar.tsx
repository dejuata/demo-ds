import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pds-calendar',
  styleUrl: 'pds-calendar.css',
  shadow: true,
})
export class PdsCalendar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
