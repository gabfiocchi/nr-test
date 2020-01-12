import Component from '../core/component';

export default class Item extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(appState) {
        super(appState);
    }

    template() {
        return `
            <li
                class="item"
                onClick="alert('App version: ${this.state.version}')"
            >
                <span>${this.state.apdex}</span>
                <p>${this.state.name}</p>
            </li>
        `;
    }
}
