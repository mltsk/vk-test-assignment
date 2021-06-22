let htmlForm = document.querySelector('.html-form');

const json = {
    // "element": "form",
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
        }
    ]
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
        "element": "input",
        "type": "checkbox",
        "name": "agree",
        "id": "agree",
        "label": "Согласен",
        "attribute": "required"
    },
    {
        "element": "button",
        "type": "submit",
        "text": "Отправить"
    }]
}

const getAttributes = (json) => {
    const attribute = [];
    const notAttribute = ['element', 'elements', 'label', 'legend'];
    Object.keys(json).forEach( key => {
        if (!notAttribute.includes(key)){
            attribute.push(key);
        } 
    })
    return attribute;
}

const formGenerator = (json) => {

    let result = document.createElement('form');
    const attribute = getAttributes(json);
    attribute.forEach(key => result.setAttribute(key, json[key]));

    const iter = (json, result) => {
        let node ='';
        if(Array.isArray(json)) {
            json.elements.forEach(item => {
                result.appendChild(iter(item, element));
            })
        } else {
            result.appendChild(iter(json.elements));
        } 

        let element = document.createElement(json.element);
        const attribute = getAttributes(json);
        
        attribute.forEach(key => element.setAttribute(key, json[key]));

        if(json.label !== undefined) {
            label = document.createElement('label');
            label.setAttribute('for', json.id);
            label.innerText = json.label;
            result.appendChild(label);
        }

        result.appendChild(element);

        if(json.elements !== undefined) {
            if(Array.isArray(json.elements)) {
                json.elements.forEach(item => {
                    result.appendChild(iter(item, element));
                })
            } else {
                result.appendChild(iter(json.elements));
            } 
        }

        
        return result;
    }

    htmlForm.appendChild(iter(json.elements, result));
}


console.log(formGenerator(json));