import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2
} from '@angular/core';

import { BaseComponent } from '../../base.component';

@Component({
  selector: 'dt-block-container',
  template: `
    <div #container>
      <ng-content></ng-content>
    </div>
  `,
  styles: [':host { display: block }']
})
export class DtBlockContainerComponent extends BaseComponent implements AfterViewInit {
  @ViewChild("container", { static: false }) public containerRef: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {
    super();
  }

  public ngAfterViewInit(): void {
    if (this.containerRef && this.containerRef.nativeElement) {
      const el = this.containerRef.nativeElement;
      this.handleBaseStyles(el, this.renderer);
    }
  }
}
