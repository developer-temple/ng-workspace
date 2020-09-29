import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';

import { BaseComponent } from '../../base.component';

import {
  StyleProps,
  PositionTypes
} from 'dt-enum';

@Component({
  selector: 'dt-relative-container',
  template: `
    <div #container>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class DtRelativeContainerComponent extends BaseComponent implements AfterViewInit {
  @ViewChild("container", { static: false }) public containerRef: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {
    super();
  }

  public ngAfterViewInit(): void {
    if (this.containerRef && this.containerRef.nativeElement) {
      const el = this.containerRef.nativeElement;
      this.handleBaseStyles(el, this.renderer);
      this.renderer.setStyle(el, StyleProps.POSITION, PositionTypes.RELATIVE);
    }
  }
}
