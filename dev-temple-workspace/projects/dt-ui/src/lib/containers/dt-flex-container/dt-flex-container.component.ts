import {
  Component,
  Input,
  Renderer2,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { BaseComponent } from '../../base.component';

import {
  StyleProps,
  DisplayTypes,
  StyleValues,
} from 'dt-enum';

import {
  DTHelpers as Helpers
} from 'dt-static';

@Component({
  selector: 'dt-flex-container',
  template: `
    <div #container>
      <ng-content></ng-content>
    </div>
  `,
})
export class DtFlexContainerComponent extends BaseComponent implements AfterViewInit {
  @ViewChild("container", { static: false }) public containerRef: ElementRef<HTMLDivElement>;

  @Input() public direction: string = '';
  @Input() public justify: string = '';
  @Input() public align: string = '';
  @Input() public wrap: boolean = false;
  @Input() public gap: string = '';
  @Input() public flow: string = '';

  constructor(protected renderer: Renderer2) {
    super();
  }

  public ngAfterViewInit(): void {
    if (this.containerRef && this.containerRef.nativeElement) {
      const el = this.containerRef.nativeElement;
      this.handleBaseStyles(el, this.renderer);

      this.renderer.setStyle(el, StyleProps.DISPLAY, DisplayTypes.FLEX);

      if (!Helpers.isStringNullOrEmpty(this.direction)) {
        this.renderer.setStyle(el, StyleProps.FLEX_DIRECTION, this.direction);
      }

      if (!Helpers.isStringNullOrEmpty(this.justify)) {
        this.renderer.setStyle(el, StyleProps.FLEX_JUSTIFY, this.justify);
      }

      if (!Helpers.isStringNullOrEmpty(this.align)) {
        this.renderer.setStyle(el, StyleProps.FLEX_ALIGN, this.align);
      }

      this.renderer.setStyle(el, StyleProps.FLEX_WRAP, this.wrap ? StyleValues.FLEX_WRAP : StyleValues.FLEX_NO_WRAP);

      if (!Helpers.isStringNullOrEmpty(this.gap)) {
        this.renderer.setStyle(el, StyleProps.FLEX_GAP, this.gap);
      }

      if (!Helpers.isStringNullOrEmpty(this.flow)) {
        this.renderer.setStyle(el, StyleProps.FLEX_FLOW, this.flow);
      }
    }
  }
}
