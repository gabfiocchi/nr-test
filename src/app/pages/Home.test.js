/* eslint-disable no-undef */
/* jest describe it */
import HomePage from './Home';

// eslint-disable-next-line compat/compat
const mockFetchPromise = Promise.resolve({
    // eslint-disable-next-line compat/compat
    json: () => Promise.resolve([{
        apps: [{
            version: 1,
            apdex: 100,
            name: 'Dummy'
        }]
    }])
});
window.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

const home = new HomePage();
document.body.innerHTML = home.render();

describe('Home page', () => {
    it('should render the template', async () => {
        expect(home.render()).toMatchSnapshot();
    });
    it('should fecht the data', async () => {
        await home.fetchData();
        expect(home.state.hosts).toMatchObject([{
            apps: [{
                version: 1,
                apdex: 100,
                name: 'Dummy'
            }]
        }]);
    });
    it('should call to toggleView', () => {
        window.toggleView = jest.fn();
        document.toggleView();
        // expect(window.toggleView).toBeCalled();
        expect(home.state.viewGrid).toBeFalsy();
    });
});
