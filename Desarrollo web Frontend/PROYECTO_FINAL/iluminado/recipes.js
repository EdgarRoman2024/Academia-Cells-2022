import { LitElement, html, css } from 'lit-element';
import { estilos } from './estilos/estilos.js';
import { links } from './links/links';
import { recipe } from './recetas/recetas.js';

class Recipes  extends LitElement {


  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return [links,recipe];
  }
  
  static get styles() {
    return [estilos,css`
      :host {
        display: block;
      }
    `];
  }
}


customElements.define('wc-recipes', Recipes);
export default Recipes