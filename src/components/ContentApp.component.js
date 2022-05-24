class ContentApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{}
        h1{
            color: #6951ae;
        }
        li{
            margin: 1rem 0;

        }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${ContentApp.styles}</style>
     <div class='container'>
        <h1>
            Template Vanilla js
        </h1>
        <ul>
            <li>Postcss</li>
            <li>Eslint</li>
            <li>StyleLint</li>
            <li>config Webcoponents</li>
        </ul>
     </div>
    `;
    }
}
customElements.define('content-app', ContentApp);