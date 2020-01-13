/* eslint-disable no-undef */
import Item from './item';

const item = new Item({
    version: 1,
    name: 'Dummy name',
    apdex: 100
});
document.body.innerHTML = item.template();

describe('Item component', () => {
    it('should have state props', () => {
        expect(item.state.version).toBe(1);
        expect(item.state.name).toBe('Dummy name');
        expect(item.state.apdex).toBe(100);
    });
    it('should render the template', () => {
        expect(item.render()).toMatchSnapshot();
    });
    it('should call to alert', () => {
        console.log('docu', document.getElementsByClassName('item')[0].innerHTML);
    });
});
