import { LitElement, html, css } from 'lit-element';
import { estilos } from './estilos/estilos';
import { links } from './links/links';

class About  extends LitElement {

  static get properties() {
    return {
        showBar : {Type: Boolean, Reflect: true, }

    };
  }

  constructor() {
    super();
    this.titulo = "COMIDA DE ";
    this.tituloTwo = "MÉXICO";
    this.acercaDe = "Acerca de";
    this.home = "Inicio";
    this.contacto = "Contacto";
    this.lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam";


  }
  sideMnu(){
    this.showBar = !this.showBar;
  }

  render() {
    return[links ,html`
        <!-- top nav -->
  <nav class="z-depth-0">
    <div class="nav-wrapper container">
      <a href="/">${this.titulo}<span>${this.tituloTwo}</span></a>
      <span class="right grey-text text-darken-1">
      <i class="material-icons sidenav-trigger side-menu" data-target="side-menu" @click = "${this.sideMnu}">menu</i>
      </span>
    </div>
  </nav>

  <!-- side nav -->
  <ul id="side-menu" class="sidenav side-menu" ?hidden = "${!this.showBar}">
    <li><a class="subheader">${this.titulo}${this.tituloTwo}</a></li>
    <li><a href="/" class="waves-effect">${this.home}</a></li>
    <li><a href="/about.html" class="waves-effect">${this.acercaDe}</a></li>
    <li><div class="divider"></div></li>
    <li><a href="/contact.html" class="waves-effect">
      <i class="material-icons">mail_outline</i>${this.contacto}</a>
    </li>
  </ul>

  <!-- content -->
  <div class="container grey-text">
    <h5 class="center">${this.acercaDe} ${this.titulo} ${this.tituloTwo}</h5>
    <p>${this.lorem}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus omnis, ea doloremque exercitationem id necessitatibus. Voluptatem officiis cupiditate commodi totam, hic laborum est ducimus amet iure, non dignissimos illo.</p>
  </div>
    `];
  }
  
  static get styles() {
    return [estilos,css`
      :host {
        display: block;
      }
    `];
  }
}


customElements.define('wc-about', About);