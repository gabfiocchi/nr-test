/* global */
import { App } from './core';

// Pages
import List from './pages/List';
import Grid from './pages/Grid';

App.create({
    routes: {
        '/': List,
        '/grid': Grid
    }
});
