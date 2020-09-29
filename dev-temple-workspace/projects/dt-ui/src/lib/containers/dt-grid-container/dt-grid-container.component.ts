import {
  Component,
  AfterViewInit,
  Renderer2,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';

import { BaseComponent } from '../../base.component';

import {
  StyleProps,
  DisplayTypes
} from 'dt-enum';

import {
  DTHelpers as Helpers
} from 'dt-static';

@Component({
  selector: 'dt-grid-container',
  template: `
    <div #container>
      <ng-content></ng-content>
    </div>
  `
})
export class DtGridContainerComponent extends BaseComponent implements AfterViewInit {
  @ViewChild("container", { static: false }) public containerRef: ElementRef<HTMLDivElement>;

  @Input() public columns: string = '';
  @Input() public rows: string = '';
  @Input() public areas: string = '';
  @Input() public gap: string = '';
  @Input() public columnGap: string = '';
  @Input() public rowGap: string = '';
  @Input() public justify: string = '';
  @Input() public align: string = '';
  @Input() public flow: string = '';

  constructor(protected renderer: Renderer2) {
    super();
  }

  public ngAfterViewInit(): void {
    if (this.containerRef && this.containerRef.nativeElement) {
      const el = this.containerRef.nativeElement;
      this.handleBaseStyles(el, this.renderer);

      this.renderer.setStyle(el, StyleProps.DISPLAY, DisplayTypes.GRID);

      if(!Helpers.isStringNullOrEmpty(this.columns)) {
        this.renderer.setStyle(el, StyleProps.GRID_COLUMNS, this.columns);
      }

      if (!Helpers.isStringNullOrEmpty(this.rows)) {
        this.renderer.setStyle(el, StyleProps.GRID_ROWS, this.rows);
      }

      if (!Helpers.isStringNullOrEmpty(this.areas)) {
        this.renderer.setStyle(el, StyleProps.GRID_AREAS, this.areas);
      }

      if (!Helpers.isStringNullOrEmpty(this.gap)) {
        this.renderer.setStyle(el, StyleProps.GRID_GAP, this.gap);
      }

      if (!Helpers.isStringNullOrEmpty(this.columnGap)) {
        this.renderer.setStyle(el, StyleProps.GRID_COLUMN_GAP, this.columnGap);
      }

      if (!Helpers.isStringNullOrEmpty(this.rowGap)) {
        this.renderer.setStyle(el, StyleProps.GRID_ROW_GAP, this.rowGap);
      }

      if (!Helpers.isStringNullOrEmpty(this.justify)) {
        this.renderer.setStyle(el, StyleProps.GRID_JUSTIFY, this.justify);
      }

      if (!Helpers.isStringNullOrEmpty(this.align)) {
        this.renderer.setStyle(el, StyleProps.GRID_ALIGN, this.align);
      }

      if (!Helpers.isStringNullOrEmpty(this.flow)) {
        this.renderer.setStyle(el, StyleProps.GRID_FLOW, this.flow);
      }
    }
  }
}
