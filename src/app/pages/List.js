import Card from '../components/cards';
import Header from '../components/header';
import { RenderArray } from '../core';

export default {
    render: () => {
        const list = '<ul><li>ASD</ul></li>';
        const items = ['91 license', 'license', 'license', 'rustic'];

        return `
            ${Header({ user: 'averylongemailadress@companyname.com' })}
            <div class="container">
                ${Card({ title: '7983b' }, `
                    <ul>
                        ${RenderArray('li', items)}
                    </ul>
                `)}
                ${Card({}, `${list}`)}
                ${Card({}, `${list}`)}
                ${Card({}, `${list}`)}
                ${Card({}, `${list}`)}
                ${Card({ title: '7983b' }, `
                    <ul>
                        ${RenderArray('li', items)}
                    </ul>
                `)}
            </div>
        `;
    }
};
