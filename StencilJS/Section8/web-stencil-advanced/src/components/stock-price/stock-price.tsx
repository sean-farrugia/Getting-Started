import { Component, Prop, State, Watch, Listen, h } from "@stencil/core";
import { AV_API_KEY} from '../../global/global'

@Component({
    tag: 'sf-stock-price',
    styleUrl: './stock-price.css',
    shadow: true
})
export class StockPrice{
    stockInput: HTMLInputElement;
    // initialStockSymbol: string;
    // @Element() el: HTMLElement;

    @State() fetchedPrice:number;
    @State() stockUserInput: string;
    @State() stockInputValid = false;
    @State() error: string;
    @State() loading = false;

    @Prop({mutable: true, reflect: true}) stockSymbol: string;

    @Watch('stockSymbol')
    stockSymbolChanged(newValue: string, oldValue: string) {
        if (newValue !== oldValue){
            this.stockUserInput = newValue;
            this.stockInputValid = true;
            this.fetchStockPrice(newValue);
        }
    }

    onFetchStockPrice(event: Event) {
        event.preventDefault();
        // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
        this.stockSymbol = this.stockInput.value;
        // this.fetchStockPrice(stockSymbol);
    }

    onUserInput(event: Event){
        this.stockUserInput = (event.target as HTMLInputElement).value;
        if (this.stockUserInput.trim() !== ''){
            this.stockInputValid = true;
        } else {
            this.stockInputValid = false;
        }
    }

    // Component Lifecycle Hooks

    componentWillLoad() {
        // console.log('Component Will Load...');
        console.log(this.stockSymbol);
        this.fetchedPrice = 0;
        this.stockUserInput = this.stockSymbol;
        this.stockInputValid = true;
        // this.initialStockSymbol = this.stockSymbol;
    }

    componentDidLoad() {
        // console.log('Component Did Load...');
        if (this.stockSymbol) {
            this.fetchStockPrice(this.stockSymbol);
        }
    }

    componentWillUpdate(){
        // console.log('Component Will Update...');
    }

    componentDidUpdate(){
        // console.log('Component Did Update...');
        // if (this.stockSymbol !== this.initialStockSymbol){
        //     this.initialStockSymbol = this.stockSymbol;
        //     this.fetchStockPrice(this.stockSymbol);
        // }
    }

    disconnectedCallback(){
        // console.log('Component Did Unload...');
    }

    @Listen('sfSymbolSelected', {target: 'body'})
    onStockSymbolSelected(event: CustomEvent) {
        if(event.detail && event.detail !== this.stockSymbol){
            this.stockSymbol = event.detail;
        }
    }

    fetchStockPrice(stockSymbol: string) {
        this.loading = true;
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
        .then(res => {
            if(res.status !== 200) {
                throw new Error('Invalid');
            }
            return res.json();
        })
        .then(parsedResp => {
            if (!parsedResp['Global Quote']['05. price']) {
                throw new Error('Invalid Symbol');
            }
            this.error = null;
            this.fetchedPrice = parsedResp['Global Quote']['05. price'];
            this.loading = false;
        })
        .catch(err => {
            this.fetchedPrice = null;
            this.error = err.message;
            this.loading = false;
        });
    }

    hostData() {
        return {class: this.error ? 'error hydrated' : '' };
    }

    render() {
        let dataContent = <p>Please enter a symbol</p>
        if (this.error) {
            dataContent = <p>{this.error}</p>
        }
        if (this.fetchedPrice) {
            dataContent = <p>Price: €{this.fetchedPrice}</p>
        }
        if (this.loading) {
            dataContent = <sf-spinner></sf-spinner>
        }
        return [
            <form onSubmit={this.onFetchStockPrice.bind(this)}>
                <input 
                    id="stock-symbol"
                    ref={el => this.stockInput = el}
                    value={this.stockUserInput}
                    onInput={this.onUserInput.bind(this)}
                />
                <button type="submit" disabled={!this.stockInputValid || this.loading}>Fetch</button>
            </form>,
            <div>
                {dataContent}
            </div>
        ];
    }
}