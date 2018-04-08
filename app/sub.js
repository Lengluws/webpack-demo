function generateText(){
    var element = document.createElement('h2');
    element.id = 'twoH';
    element.innerHTML = 'Hello! Hello!*******';
    return element;
}

module.exports = generateText;