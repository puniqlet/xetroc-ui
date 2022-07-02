import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('x-button')
export class Button extends LitElement {
  static styles = css``

  render() {
    return html` <button>OK</button> `
  }
}
