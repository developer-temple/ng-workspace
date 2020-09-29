import { Input, Renderer2 } from '@angular/core';
import { BaseComponent } from '../base.component';
import { StyleProps, StyleValues } from 'dt-enum';
import { DTHelpers as Helpers } from 'dt-static';

export class BaseContainerComponent extends BaseComponent {
  @Input() public padding: string = '';
  @Input() public border: string = '';
  @Input() public borderRadius: string = '';
  @Input() public shadow: boolean = false;

  constructor(protected renderer: Renderer2) {
    super();
  }

  protected handleBaseStyles(el: any): void {
    // padding
    if (!Helpers.isStringNullOrEmpty(this.padding)) {
      this.renderer.setStyle(el, StyleProps.PADDING, this.padding);
    }

    // border
    if (!Helpers.isStringNullOrEmpty(this.border)) {
      this.renderer.setStyle(el, StyleProps.BORDER, this.border);
    }

    // border-radius
    if (!Helpers.isStringNullOrEmpty(this.borderRadius)) {
      this.renderer.setStyle(el, StyleProps.BORDER_RADIUS, this.borderRadius);
    }

    // shadow
    if (this.shadow) {
      this.renderer.setStyle(el, StyleProps.BOX_SHADOW, StyleValues.SHADOW);
    }
  }
}
