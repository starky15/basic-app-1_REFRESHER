import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

var root = document.getElementById('root');
var container = createRoot(root);
container.render(<App />);
