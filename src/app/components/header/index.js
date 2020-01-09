import './header.scss';
import { Render } from '../../core';

export default (props) => Render(`
    <header>
        <h1>Apps by Host</h1>
        ${props.user ? `<h2>for user ${props.user}</h2>` : ''}
        <div class="form-group">
            <input type="checkbox" name="checkbox" id="vehicle1" value="value">
            <label for="vehicle1">Show as list</label>
        </div>
    </header>
`);
