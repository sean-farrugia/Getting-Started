import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'sf-tooltip',
    styleUrl: './tooltip.css',
    shadow: true
})
export class Tooltip{
    @Prop() tip = "This is some default tooltip text.";
    @Prop({reflect: true, mutable: true}) showTip = false;

    onClickIcon() {
        this.showTip = !this.showTip;
    }

    render(){

        return [
                <slot>Default Text</slot>,
                <span class="icon" onClick={this.onClickIcon.bind(this)}>?</span>,
                <div class="tipBox">{this.tip}</div>
        ];
    }
}