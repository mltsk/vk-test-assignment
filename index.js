import formGenerator from "./module/formGenerator.js";

const json = {
    "element": "form",
    "action": "https://echo.htmlacademy.ru",
    "method": "POST",
    "elements":
    [{
        "element": "input",
        "type": "text",
        "name": "last_name",
        "id": "last_name",
        "label": "Фамилия"
    },
    {
        "element": "input",
        "type": "checkbox",
        "name": "last_name_changed",
        "id": "last_name_changed",
        "label": "ранее менялась"
    },
    {
        "element": "input",
        "type": "text",
        "name": "first_name",
        "id": "first_name",
        "label": "Имя"
    },
    {
        "element": "input",
        "type": "text",
        "name": "middle_name",
        "id": "middle_name",
        "label": "Отчество"
    },
    {
        "element": "input",
        "type": "color",
        "name": "color",
        "id": "color",
        "label": "Любимый цвет"
    },
    {
        "element": "fieldset",
        "legend": "Тип документа",
        "elements": [{
            "element": "input",
            "type": "radio",
            "name": "type_password",
            "id": "type_password_password",
            "label": "Паспорт",
            "value": "password"
        },
        {
            "element": "input",
            "type": "radio",
            "name": "type_password",
            "id": "type_password_travel",
            "label": "Загран",
            "value": "travel"
        }]

    },
    {
        "element": "fieldset",
        "legend": "Дата рождение",
        "elements": [{
            "element": "input",
            "type": "number",
            "name": "day",
            "placeholder": "31"
        },
        {
            "element": "input",
            "type": "number",
            "name": "month",
            "placeholder": "12"
        },
        {
            "element": "input",
            "type": "number",
            "name": "year",
            "placeholder": "2001"
        }]

    },
    {
        "element": "select",
        "label": "Семейное положение",
        "name": "family_status",
        "id": "family_status",
        "option": ["Холост", "Женат"]
    },
    {
        "element": "select",
        "label": "Образование",
        "name": "education",
        "id": "education",
        "option": [{
            "text": "Среднее",
            "disabled": "disabled"
            }, 
            "Высшее",
            "Второе"]
    },
    {
        "element": "input",
        "type": "tel",
        "name": "mobile_number",
        "id": "mobile_number",
        "placeholder": "+7",
        "label": "Моб. телефон"
    },
    {
        "element": "textarea",
        "name": "about",
        "id": "about",
        "label": "Расскажите о себе"
    },
    {
        "element": "input",
        "type": "checkbox",
        "name": "agree",
        "id": "agree",
        "label": "Согласен",
        "attribute": "required"
    },
    {
        "element": "button",
        "type": "reset",
        "text": "Сбросить"
    },
    {
        "element": "button",
        "type": "submit",
        "text": "Отправить"
    }]
}

const json2 = {
    "element": "form",
    "action": "https://echo.htmlacademy.ru",
    "method": "POST",
    "elements":
    {
        "element": "input",
        "type": "text",
        "name": "last_name",
        "id": "last_name",
        "label": "Фамилия"
    }
}

const buttonExample1 = document.querySelector('.box__example--1');
const buttonExample2 = document.querySelector('.box__example--2');
const textareaInput = document.querySelector('.box__textarea--input');
const textareaOutput = document.querySelector('.box__textarea--output');
const pre = document.querySelector('.box__render');

textareaInput.addEventListener('input', (e) => {
    e.preventDefault();
    let  html = formGenerator(JSON.parse(textareaInput.value)).outerHTML;
    textareaResult.value = html.replace(/></gm, '>\n<');
    pre.innerHTML = html;
});

buttonExample1.addEventListener('click', (e) => {
    e.preventDefault();
    textareaInput.value = JSON.stringify(json, null, ' ');
    let  html = formGenerator(JSON.parse(textareaInput.value)).outerHTML;
    textareaOutput.value = html.replace(/></gm, '>\n<');
    pre.innerHTML = html;
})

buttonExample2.addEventListener('click', (e) => {
    e.preventDefault();
    textareaInput.value = JSON.stringify(json2, null, ' ');
    let  html = formGenerator(JSON.parse(textareaInput.value)).outerHTML;
    textareaOutput.value = html.replace(/></gm, '>\n<');
    pre.innerHTML = html;
})



// console.log(formGenerator(json)); 