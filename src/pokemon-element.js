import { html, LitElement } from "lit-element";

class MyPokemon extends LitElement{
    render(){
        return html`
          <p>El pokemon es ${this.nombre}</p>
          <table>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre del Pokemon</th>
              </tr>
            </thead>
            <tbody id="contenido">
            </tbody>
          </table>
          <button @click="${this.llamado}">Consultar</button>
        `;
    }

    static get properties(){
        return {
            nombre: { type:String }
        };
    }

    constructor() {
        super();

        this.nombre = "";
    }

    llamado() {
        const url = 'https://pokeapi.co/api/v2/pokemon'

        fetch(url)
        .then(response => response.json())
        .then(data => {
        
        console.log(data.results[0].name);

        this.nombre = data.results[0].name;
        })
        .catch(err=>console.log(err))  
    }

}

customElements.define('my-pokemon', MyPokemon);