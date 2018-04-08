import index from '../css/index.css';

var sub = require('./sub');

var app = document.createElement('div');
app.innerHTML = '<h1>Hello! |(</h1>';
document.body.appendChild(app);

document.body.appendChild(sub());