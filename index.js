import formGenerator from "./module/formGenerator.js";
import style from "./data/style.js";
import {json1, json2} from "./data/json.js";


const buttonExample1 = document.querySelector('.box__example--1');
const buttonExample2 = document.querySelector('.box__example--2');
const textareaInput = document.querySelector('.box__textarea--input');
const textareaOutput = document.querySelector('.box__textarea--output');
const pre = document.querySelector('.box__render');

textareaInput.addEventListener('input', (e) => {
    e.preventDefault();
    let  htmlAndCss = formGenerator((JSON.parse(textareaInput.value)), style);
    textareaOutput.value = htmlAndCss;
    pre.innerHTML = htmlAndCss;
});

buttonExample1.addEventListener('click', (e) => {
    e.preventDefault();
    textareaInput.value = JSON.stringify(json1, null, ' ');
    let  htmlAndCss = formGenerator((JSON.parse(textareaInput.value)), style);
    textareaOutput.value = htmlAndCss;
    pre.innerHTML = htmlAndCss;
})

buttonExample2.addEventListener('click', (e) => {
    e.preventDefault();
    textareaInput.value = JSON.stringify(json2, null, ' ');
    let  htmlAndCss = formGenerator((JSON.parse(textareaInput.value)), style);
    textareaOutput.value = htmlAndCss;
    pre.innerHTML = htmlAndCss;
})