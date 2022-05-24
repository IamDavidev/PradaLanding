import bag from '../assets/icons/Bag.svg';
import HeaderImg from '../assets/images/headerImage.png';

// arrivals
import Terry from '../assets/images/Terry.png';
import ReNylon from '../assets/images/ReNylon.png';
import PradaSymbole from '../assets/images/PradaS.png';

class ContentApp extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get styles() {
		return /*css*/ `
        :host{}
        .container{
            width:100vw;
            height:100%;
        }
        .navbar {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
            background: #c4c4c4;
            font-size:14px;
        }
        .shop > h3 {
            font-size:14px ;
            text-decoration: underline;
        } 
        .singIn{
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            gap:15px;
            font-size:14px;
        }
        .header{
            display:flex;
            flex-direction:column;
            gap:19px;
            width:100%;
            align-items:center;
        }
        .titlePrada{
            font-family:"Modern Antiqua";
            text-transfrom:uppercase;
            font-size:50px;
        }
        .listHeader {
            display:flex;
            flex-direction:row;
            justify-content:center;
            flex-wrap:wrap;
            gap:90px;
            align-items:center;
            list-style:none;
            width:100%;
        }
        .figureHeader > img {
            border-radius:2px;
        }
        .summer{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        .titleSummer{
            font-size:40px;
            font-family:"Modern Antiqua";
            margin:1.5rem 0 ;
        }
        .textSummer{
            text-align:center;
            width:40ch
        }
        .btnSummer{
            background: #fff;
            padding:21px 54px ;
            border:1px solid #000;
            font-size:14px;
        }
        .Arrivals{
            display:flex;
            flex-direction:column;
            justify-content:center;
            gap:20px;
        }
        .titleArrivals{
            text-align:center;
            font-weight:bold;
            font-size:36px;
        }
        .contentArivals{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
        }
        .contentArivals > figure{
            display:flex;
            flex-direction:column;
            gap:4px;
        }
        span,h3{
            padding:0;
            margin:0;
        }
    `;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = /*html*/ `
        <style>${ContentApp.styles}</style>
     <div class='container'>
        <nav class="navbar">
            <div></div>
            <div class="shop"><h3> shop the sale collection  </h3></div>
            <div class="singIn">
                <span> Sign In / Register  </span><img src=${bag} alt="bag" /> Bag
            </div>
        </nav>
        <header class="header">
               <h1 class="titlePrada"> prada</h1>
               <ul class="listHeader">
                    <li class="item">Women</li>
                    <li class="item">Men</li>
                    <li class="item">Children</li>
                    <li class="item">Sale</li>
                    <li class="item">New In</li>
                    <li class="item">Home Collection</li>
                </ul>
                <figure class="figureHeader">
                    <img src=${HeaderImg} alt="" />
                </figure>
        </header>
        <section class="summer">
            <h2 class="titleSummer">summer 2021</h2>
            <p class="textSummer">explore sports-inspired ready-to-wear an dbold accesories from the latest collection</p>
            <button class="btnSummer">new in for her</button>
        </section>
        <section class="Arrivals">
            <h2 class="titleArrivals">New Arrivals</h2>
            <div class="contentArivals">
                <figure>
                    <img src=${Terry} alt="" />
                    <span>4 colors</span>
                    <h3>Terry tote bag</h3>
                </figure>
                <figure>
                    <img src=${ReNylon} alt="" />
                    <span>8 colors</span>
                    <h3>Re-Nylon Bucket hat</h3>
                </figure>
                <figure>
                    <img src=${PradaSymbole} alt="" />
                    <span>1 color</span>
                    <h3>Prada Symbole Snglasses</h3>
                </figure>
            </div>
        </section>
     </div>
    `;
	}
}
customElements.define('content-app', ContentApp);
