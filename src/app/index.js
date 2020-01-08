import './main.scss';
import { App } from './core';
import List from './pages/List';
import Grid from './pages/Grid';

App.create({
    routes: {
        '/': List,
        '/grid': Grid
    }
});
