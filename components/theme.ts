import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('x-theme')
export class Theme extends LitElement {
  static styles = css``

  render() {
    return html` <div>u-theme component was created!!</div> `
  }
}
