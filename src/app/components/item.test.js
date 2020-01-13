/* eslint-disable no-undef */
/* jest describe it */
import Item from './item';

// eslint-disable-next-line compat/compat
const mockFetchPromise = Promise.resolve({
    // eslint-disable-next-line compat/compat
    json: () => Promise.resolve({})
});
window.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

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
        window.alert = jest.fn();
        document.showAlert();
        expect(window.alert).toBeCalled();
    });
});
