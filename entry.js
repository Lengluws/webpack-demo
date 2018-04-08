var webpackHotMiddlewareScript = 'webpack-hot-middleware/client?reload=true&noInfo=true';

var dev = process.env.NODE_ENV === 'dev';

var entry = {
    global: './public/js/global.js',
    index: './public/js/index.js',
    demo: './public/js/demo.js'
}

if(1){
    var trans = {};
    for(let k in entry){
        trans[k] = [entry[k], webpackHotMiddlewareScript];
    }
    module.exports = trans;
}else {
    module.exports = entry;
}