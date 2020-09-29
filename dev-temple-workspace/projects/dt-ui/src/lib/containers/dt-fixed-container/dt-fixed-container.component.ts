import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Input
} from '@angular/core';

import { BaseComponent } from '../../base.component';

import {
  StyleProps,
  PositionTypes
} from 'dt-enum';

@Component({
  selector: 'dt-fixed-container',
  template: `
    <div #container>
      <ng-content></ng-content>
    </div>
  `
})
export class DtFixedContainerComponent extends BaseComponent implements AfterViewInit {
  @ViewChild("container", { static: false }) public containerRef: ElementRef<HTMLDivElement>;

  @Input() public top: string = '';
  @Input() public left: string = '';
  @Input() public right: string = '';
  @Input() public bottom: string = '';
  @Input() public zIndex: string = '';

  constructor(private renderer: Renderer2) {
    super();
  }

  public ngAfterViewInit(): void {
    if (this.containerRef && this.containerRef.nativeElement) {
      const el = this.containerRef.nativeElement;

      this.handleBaseStyles(el, this.renderer);
      this.renderer.setStyle(el, StyleProps.POSITION, PositionTypes.FIXED);

      if (this.top) {
        this.renderer.setStyle(el, StyleProps.TOP, this.top);
      }

      if (this.left) {
        this.renderer.setStyle(el, StyleProps.LEFT, this.left);
      }

      if (this.bottom) {
        this.renderer.setStyle(el, StyleProps.BOTTOM, this.bottom);
      }

      if (this.right) {
        this.renderer.setStyle(el, StyleProps.RIGHT, this.right);
      }

      if (this.zIndex) {
        this.renderer.setStyle(el, StyleProps.Z_INDEX, this.zIndex);
      }
    }
  }
}
