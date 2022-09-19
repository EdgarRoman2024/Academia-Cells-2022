import { LitElement, html, css } from 'lit-element';
import { estilos } from './estilos/estilos.js';
import { links } from './links/links.js';



class TopNav extends LitElement {

  static get properties() {
    return {
      nombreUno: { Type: String },
      nombreDos: { Type: String },
      inicio: { Type: String },
      acercaDe: { Type: String },
      icon: { Type: String },
      iconM: { Type: String },
      contacto: { Type: String },
      showBar : {Type: Boolean, Reflect: true, },
    };
  }

  constructor() {
    super();
    this.nombreUno = "COMIDA DE ";
    this.nombreDos = "MÉXICO";
    this.inicio = "Inicio";
    this.acercaDe = "Acerca de";
    this.icon = "mail_outline";
    this.iconM = "menu";
    this.contacto = "Contacto";
  }

  render() {
    return [
      links,
      html`
    <nav class="z-depth-0">
      <div class="nav-wrapper container">
        <a href="/">${this.nombreUno}<span>${this.nombreDos}</span></a>
        <span class="right grey-text text-darken-1">
          <i class="material-icons sidenav-trigger side-menu" data-target="side-menu" @click = "${this.sideMnu}">menu</i>
        </span>
      </div>
    </nav>
    
    <ul id="side-menu" class="sidenav side-menu" ?hidden = "${!this.showBar}">
      <li><a class="subheader">${this.nombreUno}${this.nombreDos}</a></li>
      <li><a href="/" class="waves-effect">${this.inicio}</a></li>
      <li><a href="/about.html" class="waves-effect">${this.acercaDe}</a></li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a href="/contact.html" class="waves-effect">
          <i class="material-icons">${this.icon}</i>${this.contacto}</a>
      </li>
    </ul>
    `]
  }

  sideMnu(){
    this.showBar = !this.showBar;
  }

  static get styles() {
    return [estilos, css` :host {
      display: block;
    }`]
  }
}



customElements.define('top-nav', TopNav);