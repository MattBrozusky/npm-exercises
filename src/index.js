"use strict";

const $ = require('jquery');

const sayHello = () => {
    console.log('Hello');
};


$("h1").html(`<span>Hello World</span>`);

const test = () => {
    console.log('test')
};
test();
sayHello();