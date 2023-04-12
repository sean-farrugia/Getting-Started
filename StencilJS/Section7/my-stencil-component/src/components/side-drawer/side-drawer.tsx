import { Component, Method, Prop, State, h } from "@stencil/core";

@Component({
    tag: 'sf-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer{
    @State() showContactInfo = false;

    @Prop({reflect: true}) my_title: string;
    @Prop({reflect: true, mutable: true}) opened: boolean;

    onCloseDrawer() {
        this.opened = false;
    }

    onContentChange(content: string) {
        this.showContactInfo = content === 'contact';
    }

    @Method()
    async open() {
        this.opened = true;
    }

    render() {
        let mainContent = <slot/>;
        if(this.showContactInfo){
            mainContent = (
                <div id="contact-info">
                    <h2>Contact Information</h2>
                    <p>You can reach us via phone or email.</p>
                    <ul>
                        <li>Phone: +356 79906907</li>
                        <li>E-Mail: <a href="mailto:sean.farrugia@betssongroup.com">sean.farrugia@betssongroup.com</a></li>
                    </ul>
                </div>
            );
        }
        return [
            <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,
            <aside>
                <header>
                    <h1>{this.my_title}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button
                        class={this.showContactInfo ? "inactive" : "active"}
                        onClick={this.onContentChange.bind(this, 'nav')}
                    >Navigation</button>
                    <button
                        class={this.showContactInfo ? "active" : "inactive"}
                        onClick={this.onContentChange.bind(this, 'contact')}>Contact</button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        ];
    }
}