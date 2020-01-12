import Render from './render';

export default class Component {
    constructor(state) {
        this.state = state;
    }

    render() {
        return Render(this.template());
    }
}
