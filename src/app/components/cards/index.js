import './cards.scss';
import { Render } from '../../core';

export default (props, slot) => Render(`
    <div class="card">
        ${props.title ? `<h3 class="title">${props.title}</h3>` : ''}
        ${slot}
    </div>
`);
