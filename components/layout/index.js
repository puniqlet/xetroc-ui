"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
let Layout = class Layout extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.height = 0;
        this.config = {
            isTrue: true,
        };
        this.isTrue = false;
    }
    render() {
        return (0, lit_1.html) `
      <div class="test-a">
        ${this.height + 5}
        <div>test config</div>
        ${this.config?.isTrue ? 'true' : 'false'}
        <div>test boolean</div>
        ${this.isTrue ? 'true' : 'false'}
      </div>
    `;
    }
    firstUpdated() {
        console.log('this', this);
    }
    updated() {
        console.log('this.config', this.config);
    }
};
Layout.styles = (0, lit_1.css) `
    .test-a {
      font-size: 60px;
      color: blue;
    }
    .test-b {
      font-size: 60px;
      color: blue;
    }
    .test-c {
      font-size: 60px;
      color: blue;
    }
  `;
__decorate([
    (0, decorators_js_1.property)({
        type: Number,
    }),
    __metadata("design:type", Object)
], Layout.prototype, "height", void 0);
__decorate([
    (0, decorators_js_1.property)({
        type: Object,
    }),
    __metadata("design:type", Object)
], Layout.prototype, "config", void 0);
__decorate([
    (0, decorators_js_1.property)({
        type: Boolean,
    }),
    __metadata("design:type", Object)
], Layout.prototype, "isTrue", void 0);
Layout = __decorate([
    (0, decorators_js_1.customElement)('x-layout')
], Layout);
exports.Layout = Layout;
