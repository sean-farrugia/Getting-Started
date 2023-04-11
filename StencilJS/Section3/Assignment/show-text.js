class ShowText extends HTMLElement {
    constructor () {
        super();
        // this._showText = "This is some default text.";
        this._button;
        this._displayText;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <button>Show</button>
        <p>
            <slot>Some default</slot>
        </p>
        `;
        this.isHidden = "true";
    }

    connectedCallback() {
        if(this.hasAttribute('hide'))this.isHidden = this.getAttribute('hide');
        this._button = this.shadowRoot.querySelector('button');
        this._displayText = this.shadowRoot.querySelector('p');
        this._button.addEventListener('click', this._showText.bind(this));
        this._showText();
    }

    _showText() {
        if (this.isHidden == "false") {
            this._displayText.style.display = 'block';
            this._button.textContent = 'Hide';
            this.isHidden = "true";
          } else {
            this._displayText.style.display = 'none';
            this._button.textContent = 'Show';
            this.isHidden = "false";
          }
    }
}


customElements.define('sf-show-text', ShowText);