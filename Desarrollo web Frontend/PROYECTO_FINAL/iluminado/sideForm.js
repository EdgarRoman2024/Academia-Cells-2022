import { LitElement, html, css } from 'lit-element';
import { estilos } from './estilos/estilos.js';
import { links } from './links/links';

class SideFOrm  extends LitElement {


  static get properties() {
    return {
        showForm:{Type: Boolean, Reflect:true},
        newRecepts: {Type: String},
        nameRecepts:{Type:String},
        ingedientes:{Type:String},
        recetas:{Type:String},
        add:{Type:String} 
    };
  }

  constructor() {
    super();
    this.insertarReceta;
    this.newRecepts = "Nueva receta";
    this.nameRecepts = "Nombre de la receta";
    this.ingedientes = "Ingredientes";
    this.recetas = "Añadir Receta";
    this.add = "add";
  }
  

  render() {
    return[links ,html`
      <div class="center">
    <a class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
      <i class="material-icons" @click = "${this.insertarReceta}">${this.add}</i>
    </a>
  </div>
    <!-- add recipe side nav -->
    <div id="side-form" class="sideform side-form" ?hidden="${!this.showForm}">
    <form class="add-recipe container section">
      <h6>${this.newRecepts}</h6>
      <div class="divider"></div>
      <div class="input-field">
      <label for="title"><b>${this.nameRecepts}</b></label><br>
        <input placeholder="e.g. Huevito con captsu" id="title" type="text" class="validate">
      </div>
      <div class="input-field">
      <label for="ingredients"><b>${this.ingedientes}</b></label><br>
        <input placeholder="e.j. Huevito, Capsu, garlic" id="ingredients" type="text" class="validate">
      </div>
      <div class="input-field center">
        <button class="btn-small">${this.recetas}</button>
      </div>
    </form>
  </div>
    `];
  }


  insertarReceta(){
    this.showForm = !this.showForm;
  }
  static get styles() {
    return [estilos,css`
      :host {
        display: block;
      }
    `];
  }
}



customElements.define('side-formu', SideFOrm);