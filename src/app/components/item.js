import Component from '../core/component';

export default class Item extends Component {
    constructor(appState) {
        super(appState);

        document.showAlert = (version) => {
            // eslint-disable-next-line no-alert
            alert(`App version: ${version}`);
        };
    }

    template() {
        return `
            <li
                class="item"
                onClick="showAlert(${this.state.version})"
            >
                <span>${this.state.apdex}</span>
                <p>${this.state.name}</p>
            </li>
        `;
    }
}
