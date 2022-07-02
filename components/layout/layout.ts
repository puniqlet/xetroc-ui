import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('x-layout')
export class Layout extends LitElement {
  static styles = css``

  @property({
    type: Number,
  })
  public height = 0

  @property({
    type: Object,
  })
  public config = {
    isTrue: true,
  }

  @property({
    type: Boolean,
  })
  public isTrue = false

  render() {
    return html`
      <div>
        ${this.height + 5}
        <div>test config</div>
        ${this.config?.isTrue ? 'true' : 'false'}
        <div>test boolean</div>
        ${this.isTrue ? 'true' : 'false'}
      </div>
    `
  }

  firstUpdated() {
    console.log('this', this)
  }

  updated() {
    console.log('this.config', this.config)
  }
}
