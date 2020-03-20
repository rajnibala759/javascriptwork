'use strict'

function createWithInnerHTML () {
    let user_value = document.getElementById('elementType').value
    let user_input = document.getElementById('elementContent').value
    document.getElementById('output').innerHTML += '<' + user_value + ' class = "inner-html">' + user_input + '</' + user_value + '>'
}

function createWithCreateElement () {
    let user_value = document.getElementById('elementType').value
    let user_input = document.getElementById('elementContent').value
    let new_element = document.createElement('output')
    new_element.innerHTML += '<' + user_value + ' class = "create-element">' + user_input + '</' + user_value + '>'
    document.body.appendChild(new_element)
}

    



