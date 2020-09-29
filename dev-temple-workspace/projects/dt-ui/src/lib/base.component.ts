import { Renderer2, Input } from '@angular/core';
import { DTHelpers as Helpers } from 'dt-static';
import { StyleProps, StyleValues } from 'dt-enum';

export class BaseComponent {
  @Input() public minWidth: string = '';
  @Input() public width: string = '';
  @Input() public maxWidth: string = '';
  @Input() public minHeight: string = '';
  @Input() public height: string = '';
  @Input() public maxHeight: string = '';
  @Input() public padding: string = '';
  @Input() public margin: string = '';
  @Input() public border: string = '';
  @Input() public borderRadius: string = '';
  @Input() public shadow: boolean = false;
  @Input() public bgColor: string = '';
  @Input() public bgImage: string = '';
  @Input() public bgSize: string = '';
  @Input() public bgAttachment: string = '';
  @Input() public bgPosition: string = '';

  private defaultBgSize: string = 'cover';

  protected createBGUrl(path: string): string {
    return `url("${path}")`;
  }

  protected handleBaseStyles(el: any, renderer: Renderer2): void {
    if (!Helpers.isStringNullOrEmpty(this.bgColor)) {
      renderer.setStyle(el, StyleProps.BACKGROUND_COLOR, this.bgColor);
    }

    if (!Helpers.isStringNullOrEmpty(this.bgImage)) {
      renderer.setStyle(el, StyleProps.BACKGROUND_IMAGE, this.createBGUrl(this.bgImage));
      renderer.setStyle(el, StyleProps.BACKGROUND_REPEAT, StyleValues.BG_NO_REPEAT);

      if (!Helpers.isStringNullOrEmpty(this.bgPosition)) {
        renderer.setStyle(el, StyleProps.BACKGROUND_POSITION, this.bgPosition);
      }

      if (!Helpers.isStringNullOrEmpty(this.bgAttachment)) {
        renderer.setStyle(el, StyleProps.BACKGROUND_ATTACHMENT, this.bgAttachment);
      }

      if (!Helpers.isStringNullOrEmpty(this.bgSize)) {
        renderer.setStyle(el, StyleProps.BACKGROUND_SIZE, this.bgSize);
      } else {
        renderer.setStyle(el, StyleProps.BACKGROUND_SIZE, this.defaultBgSize);
      }
    }

    if (!Helpers.isStringNullOrEmpty(this.minWidth)) {
      renderer.setStyle(el, StyleProps.MIN_WIDTH, this.minWidth);
    }

    if (!Helpers.isStringNullOrEmpty(this.width)) {
      renderer.setStyle(el, StyleProps.WIDTH, this.width);
    }

    if (!Helpers.isStringNullOrEmpty(this.maxWidth)) {
      renderer.setStyle(el, StyleProps.MAX_WIDTH, this.maxWidth);
    }

    if (!Helpers.isStringNullOrEmpty(this.minHeight)) {
      renderer.setStyle(el, StyleProps.MIN_HEIGHT, this.minHeight);
    }

    if (!Helpers.isStringNullOrEmpty(this.height)) {
      renderer.setStyle(el, StyleProps.HEIGHT, this.height);
    }

    if (!Helpers.isStringNullOrEmpty(this.maxHeight)) {
      renderer.setStyle(el, StyleProps.MAX_HEIGHT, this.maxHeight);
    }

    if (!Helpers.isStringNullOrEmpty(this.padding)) {
      renderer.setStyle(el, StyleProps.PADDING, this.padding);
    }

    if (!Helpers.isStringNullOrEmpty(this.margin)) {
      renderer.setStyle(el, StyleProps.MARGIN, this.margin);
    }

    if (!Helpers.isStringNullOrEmpty(this.border)) {
      renderer.setStyle(el, StyleProps.BORDER, this.border);
    }

    if (!Helpers.isStringNullOrEmpty(this.borderRadius)) {
      renderer.setStyle(el, StyleProps.BORDER_RADIUS, this.borderRadius);
    }

    if (this.shadow) {
      renderer.setStyle(el, StyleProps.BOX_SHADOW, StyleValues.SHADOW);
    }
  }
}
