import {
  Component,
  ViewChild,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';

import { BaseContainerComponent } from '../base-container.component';

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
  templateUrl: './dt-flex-container.component.html'
})
export class DtFlexContainerComponent extends BaseContainerComponent implements AfterViewInit {
  @ViewChild("container", { static: false }) public containerRef: ElementRef<HTMLDivElement>;

  @Input() public direction: string = '';
  @Input() public justify: string = '';
  @Input() public align: string = '';
  @Input() public wrap: boolean = false;
  @Input() public gap: string = '';
  @Input() public flow: string = '';

  constructor(protected renderer: Renderer2) {
    super(renderer);
  }

  public ngAfterViewInit(): void {
    if (this.containerRef && this.containerRef.nativeElement) {
      const el = this.containerRef.nativeElement;
      this.handleBaseStyles(el);

      // flex
      this.renderer.setStyle(el, StyleProps.DISPLAY, DisplayTypes.FLEX);

      // directon
      if (!Helpers.isStringNullOrEmpty(this.direction)) {
        this.renderer.setStyle(el, StyleProps.FLEX_DIRECTION, this.direction);
      }

      // jusify-content
      if (!Helpers.isStringNullOrEmpty(this.justify)) {
        this.renderer.setStyle(el, StyleProps.FLEX_JUSTIFY, this.justify);
      }

      // align-items
      if (!Helpers.isStringNullOrEmpty(this.align)) {
        this.renderer.setStyle(el, StyleProps.FLEX_ALIGN, this.align);
      }

      // flex-wrap
      this.renderer.setStyle(el, StyleProps.FLEX_WRAP, this.wrap ? StyleValues.FLEX_WRAP : StyleValues.FLEX_NO_WRAP);

      // gap
      if (!Helpers.isStringNullOrEmpty(this.gap)) {
        this.renderer.setStyle(el, StyleProps.FLEX_GAP, this.gap);
      }

      // flex-flow
      if (!Helpers.isStringNullOrEmpty(this.flow)) {
        this.renderer.setStyle(el, StyleProps.FLEX_FLOW, this.flow);
      }
    } else {
      console.warn('Cannot find flex container ref');
    }
  }
}
