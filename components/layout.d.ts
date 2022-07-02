import { LitElement } from 'lit';
export declare class Layout extends LitElement {
    static styles: import("lit").CSSResult;
    height: number;
    config: {
        isTrue: boolean;
    };
    isTrue: boolean;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    updated(): void;
}
