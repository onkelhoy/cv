// system
import { html, property, CustomElement, ifDefined } from "@pap-it/system-utils";

// local 
import { style } from "./style";
import { Variant } from "./types";

export class Image extends CustomElement {
  static style = style;

  @property() src!: string;
  @property() alt?: string;
  @property() variant: Variant = "normal";

  @property({ type:Number }) width?: number;
  @property({ type:Number }) height?: number;

  render() {
    return html`
      <img 
        width="${ifDefined(this.width)}" 
        width="${ifDefined(this.height)}" 
        part="img" 
        alt="${this.alt||this.variant}" 
        src="${this.src}" 
      />
    `
  }
}


declare global {
  interface HTMLElementTagNameMap {
    "cv-image": Image;
  }
}