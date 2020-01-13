/* eslint-disable no-undef */
/* jest describe it beforeEach */
import App from './app';

// eslint-disable-next-line compat/compat
const mockFetchPromise = Promise.resolve({
    // eslint-disable-next-line compat/compat
    json: () => Promise.resolve([])
});
window.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

const application = new App();

describe('index', () => {
    beforeEach(() => {
        application.create();
        window.onload();
    });

    it('should create the app', () => {
        const main = document.getElementById('root');
        expect(main).toBeTruthy();
    });
});
