const Index = require('../app/controllers/Index');
const Demo = require('../app/controllers/Demo');

module.exports = function(app){
    // Index
    app.get('/', Index.index);

    // Demo
    app.get('/demo', Demo.demo);
}